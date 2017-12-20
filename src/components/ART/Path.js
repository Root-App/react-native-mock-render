/* eslint-disable */
var Class = require('art/core/class.js');
var Path = require('art/core/path.js');

var MOVE_TO = 0;
var CLOSE = 1;
var LINE_TO = 2;
var CURVE_TO = 3;
var ARC = 4;

var SerializablePath = Class(Path, {

  initialize: function(path) {
  },

  onReset: function() {
  },

  onMove: function(sx, sy, x, y) {
  },

  onLine: function(sx, sy, x, y) {
  },

  onBezierCurve: function(sx, sy, p1x, p1y, p2x, p2y, x, y) {
  },

  onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) {
  },

  onClose: function() {
  },

  toJSON: function() {
  }

});

module.exports = SerializablePath;
