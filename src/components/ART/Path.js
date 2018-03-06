const className = require('art/core/class.js');
const Path = require('art/core/path.js');

const SerializablePath = className(Path, {
  initialize: (path) => {},
  onReset: () => {},
  onMove: (sx, sy, x, y) => {},
  onLine: (sx, sy, x, y) => {},
  onBezierCurve: (sx, sy, p1x, p1y, p2x, p2y, x, y) => {},
  onArc: (sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) => {},
  onClose: () => {},
  toJSON: () => {},
});

module.exports = SerializablePath;
