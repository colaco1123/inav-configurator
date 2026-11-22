// Browser replacement for the Electron preload bridge (js/main/preload.js).
// Serial uses Web Serial, DFU uses WebUSB, files use downloads and file pickers,
// settings use localStorage. TCP, UDP and SITL are not available in a browser.

const listeners = { serialData: [], serialClose: [], serialError: [] };
const emit = (name, arg) => listeners[name].forEach(cb => cb(arg));
const on = name => cb => { listeners[name].push(cb); return cb; };
const off = name => cb => { listeners[name] = listeners[name].filter(l => l !== cb); };

const DFU_FILTERS = [
    { vendorId: 1155, productId: 57105 },
    { vendorId: 11836, productId: 57105 },
    { vendorId: 12619, productId: 262 },
];

// ---- Serial ----

const hex = n => (n ?? 0).toString(16).padStart(4, '0');

async function namedPorts() {
    const ports = await navigator.serial.getPorts();
    const seen = {};
    return ports.map(port => {
        const info = port.getInfo();
        const base = info.usbVendorId ? `USB-${hex(info.usbVendorId)}-${hex(info.usbProductId)}` : 'Serial';
        seen[base] = (seen[base] || 0) + 1;
        return { name: seen[base] > 1 ? `${base}-${seen[base]}` : base, port };
    });
}

let serial = { port: null, reader: null, id: 1 };

async function serialConnect(path, options) {
    const entry = (await namedPorts()).find(p => p.name === path);
    if (!entry) {
        return { error: true, msg: 'Port not found' };
    }
    try {
        await entry.port.open({ baudRate: options.bitrate, bufferSize: 65536 });
    } catch (err) {
        return { error: true, msg: err.message };
    }
    serial.port = entry.port;
    readLoop(entry.port);
    return { error: false, id: serial.id++ };
}

async function readLoop(port) {
    while (port === serial.port && port.readable) {
        serial.reader = port.readable.getReader();
        try {
            for (;;) {
                const { value, done } = await serial.reader.read();
                if (done) break;
                if (value) emit('serialData', value);
            }
        } catch (err) {
            if (port === serial.port) emit('serialError', err.message);
            break;
        } finally {
            serial.reader.releaseLock();
        }
    }
    if (port === serial.port) {
        serial.port = null;
        emit('serialClose');
    }
}

async function serialClose() {
    const port = serial.port;
    serial.port = null;
    try {
        if (serial.reader) await serial.reader.cancel();
        if (port) await port.close();
    } catch (err) {
        return { error: true, msg: err.message };
    }
    return { error: false };
}

async function serialSend(data) {
    if (!serial.port || !serial.port.writable) {
        return { error: true, msg: 'Invalid serial port or port closed' };
    }
    const writer = serial.port.writable.getWriter();
    try {
        await writer.write(new Uint8Array(data));
        return { error: false, bytesWritten: data.byteLength };
    } catch (err) {
        return { error: true, msg: `Serial write error: ${err.message}` };
    } finally {
        writer.releaseLock();
    }
}

// ---- Files ----

// Files picked with showOpenDialog, keyed by the name handed back as the "path".
const pickedFiles = new Map();
// Data passed to appendFile, downloaded once appends stop for a few seconds.
const appended = new Map();

function download(filename, data) {
    const name = String(filename).split(/[\\/]/).pop();
    const url = URL.createObjectURL(new Blob([data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function showOpenDialog(options = {}) {
    return new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';
        const exts = (options.filters || []).flatMap(f => f.extensions || []).filter(e => e !== '*');
        if (exts.length) input.accept = exts.map(e => '.' + e).join(',');
        input.onchange = () => {
            const file = input.files[0];
            if (!file) return resolve({ canceled: true, filePaths: [] });
            pickedFiles.set(file.name, file);
            resolve({ canceled: false, filePaths: [file.name] });
        };
        input.oncancel = () => resolve({ canceled: true, filePaths: [] });
        input.click();
    });
}

async function showSaveDialog(options = {}) {
    const name = String(options.defaultPath || 'inav.txt').split(/[\\/]/).pop();
    return { canceled: false, filePath: name };
}

async function readFile(filename, encoding = 'utf8') {
    const file = pickedFiles.get(filename);
    if (!file) return { error: 'File not found' };
    const data = encoding ? await file.text() : new Uint8Array(await file.arrayBuffer());
    return { error: false, data };
}

async function writeFile(filename, data) {
    download(filename, data);
    return false;
}

async function appendFile(filename, data) {
    const entry = appended.get(filename) || { parts: [], timer: null };
    entry.parts.push(data);
    clearTimeout(entry.timer);
    entry.timer = setTimeout(() => {
        appended.delete(filename);
        download(filename, new Blob(entry.parts));
    }, 3000);
    appended.set(filename, entry);
    return false;
}

// ---- Settings ----

const STORE_PREFIX = 'inav:';

function storeGet(key, defaultValue) {
    const raw = localStorage.getItem(STORE_PREFIX + key);
    if (raw === null) return defaultValue;
    try { return JSON.parse(raw); } catch { return defaultValue; }
}

// ---- Buttons to grant device access (browsers require a click) ----

function addPermissionButtons() {
    const row = document.querySelector('#portsinput .portsinput__row');
    if (!row) return;
    const add = (label, title, onClick) => {
        const b = document.createElement('a');
        b.href = '#';
        b.textContent = label;
        b.title = title;
        b.style.cssText = 'align-self:center;margin-left:6px;padding:2px 6px;border:1px solid #888;' +
            'border-radius:3px;color:#ddd;font-size:11px;text-decoration:none;white-space:nowrap';
        b.onclick = e => { e.preventDefault(); onClick().catch(() => {}); };
        row.appendChild(b);
    };
    add('+ Port', 'Allow access to a serial port', () => navigator.serial.requestPort());
    add('+ DFU', 'Allow access to a flight controller in DFU mode', () => navigator.usb.requestDevice({ filters: DFU_FILTERS }));
}

const notInBrowser = what => async () => ({ error: true, msg: `${what} is not available in the browser version` });

if (!('serial' in navigator)) {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.insertAdjacentHTML('afterbegin',
            '<div style="background:#c00;color:#fff;padding:8px;text-align:center">' +
            'This browser has no Web Serial support. Use Chrome or Edge on a desktop computer.</div>');
    });
}
document.addEventListener('DOMContentLoaded', addPermissionButtons);

window.electronAPI = {
    listSerialDevices: async () => ('serial' in navigator ? (await namedPorts()).map(p => p.name) : []),
    storeGet,
    storeSet: (key, value) => localStorage.setItem(STORE_PREFIX + key, JSON.stringify(value)),
    storeDelete: key => localStorage.removeItem(STORE_PREFIX + key),
    appGetPath: () => '',
    appGetVersion: () => __APP_VERSION__,
    appGetLocale: () => navigator.language,
    showOpenDialog,
    showSaveDialog,
    alertDialog: message => window.alert(message),
    confirmDialog: async message => window.confirm(message),

    serialConnect,
    serialClose,
    serialSend,
    onSerialData: on('serialData'),
    offSerialData: off('serialData'),
    onSerialClose: on('serialClose'),
    offSerialClose: off('serialClose'),
    onSerialError: on('serialError'),
    offSerialError: off('serialError'),

    tcpConnect: notInBrowser('TCP'),
    tcpClose: () => {},
    tcpSend: notInBrowser('TCP'),
    onTcpError: cb => cb, offTcpError: () => {},
    onTcpData: cb => cb, offTcpData: () => {},
    onTcpEnd: cb => cb, offTcpEnd: () => {},
    udpConnect: notInBrowser('UDP'),
    udpClose: async () => {},
    udpSend: notInBrowser('UDP'),
    onUdpError: cb => cb, offUdpError: () => {},
    onUdpMessage: cb => cb, offUdpMessage: () => {},

    writeFile,
    appendFile,
    readFile,
    rm: async () => false,
    chmod: async () => 'Not available in the browser version',
    getBackupDir: async () => '',
    openBackupDir: async () => {},
    listBackups: async () => [],

    startChildProcess: () => {},
    killChildProcess: () => {},
    onChildProcessStdout: cb => cb, offChildProcessStdout: () => {},
    onChildProcessStderr: cb => cb, offChildProcessStderr: () => {},
    onChildProcessError: cb => cb, offChildProcessError: () => {},
};
