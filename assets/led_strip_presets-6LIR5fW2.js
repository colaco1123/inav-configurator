const n=`/**\r
 * Quick Layout preset definitions for LED Strip tab.\r
 *\r
 * Each preset is an array of LED entries placed in wire order.\r
 * Fields match what gets written into FC.LED_STRIP:\r
 *   x, y        — grid position (0-15)\r
 *   directions  — string of direction letters (n/e/s/w/u/d)\r
 *   functions   — string of function letters (f=FlightMode, w=Warnings, i=Indicator, r=Ring, c=Color)\r
 *   color       — color index (0-15)\r
 */\r
\r
const LED_STRIP_PRESETS = {\r
    xframe: [\r
        // Front-left arm (NW diagonal) - 5 LEDs (RED - port side) - center to tip\r
        { x: 6,  y: 6,  directions: 'nw', functions: 'c',   color: 2 },\r
        { x: 5,  y: 5,  directions: 'nw', functions: 'c',   color: 2 },\r
        { x: 4,  y: 4,  directions: 'nw', functions: 'c',   color: 2 },\r
        { x: 3,  y: 3,  directions: 'nw', functions: 'c',   color: 2 },\r
        { x: 2,  y: 2,  directions: 'nw', functions: 'cwi', color: 2 },\r
        // Front-right arm (NE diagonal) - 5 LEDs (GREEN - starboard side) - center to tip\r
        { x: 9,  y: 6,  directions: 'ne', functions: 'c',   color: 6 },\r
        { x: 10, y: 5,  directions: 'ne', functions: 'c',   color: 6 },\r
        { x: 11, y: 4,  directions: 'ne', functions: 'c',   color: 6 },\r
        { x: 12, y: 3,  directions: 'ne', functions: 'c',   color: 6 },\r
        { x: 13, y: 2,  directions: 'ne', functions: 'cw',  color: 6 },\r
        // Back-left arm (SW diagonal) - 5 LEDs (RED - port side) - center to tip\r
        { x: 6,  y: 9,  directions: 'sw', functions: 'c',   color: 2 },\r
        { x: 5,  y: 10, directions: 'sw', functions: 'c',   color: 2 },\r
        { x: 4,  y: 11, directions: 'sw', functions: 'c',   color: 2 },\r
        { x: 3,  y: 12, directions: 'sw', functions: 'c',   color: 2 },\r
        { x: 2,  y: 13, directions: 'sw', functions: 'cwi', color: 2 },\r
        // Back-right arm (SE diagonal) - 5 LEDs (GREEN - starboard side) - center to tip\r
        { x: 9,  y: 9,  directions: 'se', functions: 'c',   color: 6 },\r
        { x: 10, y: 10, directions: 'se', functions: 'c',   color: 6 },\r
        { x: 11, y: 11, directions: 'se', functions: 'c',   color: 6 },\r
        { x: 12, y: 12, directions: 'se', functions: 'c',   color: 6 },\r
        { x: 13, y: 13, directions: 'se', functions: 'cwi', color: 6 },\r
    ],\r
    crossframe: [\r
        // Front arm (N) - 5 LEDs (WHITE) - center to tip\r
        { x: 7,  y: 6,  directions: 'n',  functions: 'c',   color: 1 },\r
        { x: 7,  y: 5,  directions: 'n',  functions: 'c',   color: 1 },\r
        { x: 7,  y: 4,  directions: 'n',  functions: 'c',   color: 1 },\r
        { x: 7,  y: 3,  directions: 'n',  functions: 'c',   color: 1 },\r
        { x: 7,  y: 2,  directions: 'n',  functions: 'cw',  color: 1 },\r
        // Right arm (E) - 5 LEDs (GREEN - starboard side) - center to tip\r
        { x: 9,  y: 7,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 10, y: 7,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 11, y: 7,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 12, y: 7,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 13, y: 7,  directions: 'e',  functions: 'cw',  color: 6 },\r
        // Back arm (S) - 5 LEDs (WHITE) - center to tip\r
        { x: 8,  y: 9,  directions: 's',  functions: 'c',   color: 1 },\r
        { x: 8,  y: 10, directions: 's',  functions: 'c',   color: 1 },\r
        { x: 8,  y: 11, directions: 's',  functions: 'c',   color: 1 },\r
        { x: 8,  y: 12, directions: 's',  functions: 'c',   color: 1 },\r
        { x: 8,  y: 13, directions: 's',  functions: 'cwi', color: 1 },\r
        // Left arm (W) - 5 LEDs (RED - port side) - center to tip\r
        { x: 6,  y: 8,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 5,  y: 8,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 4,  y: 8,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 3,  y: 8,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 2,  y: 8,  directions: 'w',  functions: 'cwi', color: 2 },\r
    ],\r
    wing: [\r
        // Left wing (first row at y=7) - 10 LEDs, ALL RED, facing west\r
        // Wires 0-9: Wire 0 at left tip (x=0), wire 9 at right side (x=9)\r
        { x: 0,  y: 7,  directions: 'w',  functions: 'cwi', color: 2 },\r
        { x: 1,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 2,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 3,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 4,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 5,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 6,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 7,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 8,  y: 7,  directions: 'w',  functions: 'c',   color: 2 },\r
        { x: 9,  y: 7,  directions: 'w',  functions: 'cw',  color: 2 },\r
        // Right wing (second row at y=9) - 10 LEDs, ALL GREEN, facing east\r
        // Wires 10-19: Wire 10 at left side (x=6), wire 19 at right tip (x=15)\r
        { x: 6,  y: 9,  directions: 'e',  functions: 'cwi', color: 6 },\r
        { x: 7,  y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 8,  y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 9,  y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 10, y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 11, y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 12, y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 13, y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 14, y: 9,  directions: 'e',  functions: 'c',   color: 6 },\r
        { x: 15, y: 9,  directions: 'e',  functions: 'cw',  color: 6 },\r
    ],\r
};\r
\r
export default LED_STRIP_PRESETS;\r
`;export{n as default};
