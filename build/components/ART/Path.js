var className=require('art/core/class.js');
var Path=require('art/core/path.js');

var SerializablePath=className(Path,{
initialize:function(){function initialize(path){}return initialize;}(),
onReset:function(){function onReset(){}return onReset;}(),
onMove:function(){function onMove(sx,sy,x,y){}return onMove;}(),
onLine:function(){function onLine(sx,sy,x,y){}return onLine;}(),
onBezierCurve:function(){function onBezierCurve(sx,sy,p1x,p1y,p2x,p2y,x,y){}return onBezierCurve;}(),
onArc:function(){function onArc(sx,sy,ex,ey,cx,cy,rx,ry,sa,ea,ccw,rotation){}return onArc;}(),
onClose:function(){function onClose(){}return onClose;}(),
toJSON:function(){function toJSON(){}return toJSON;}()});


module.exports=SerializablePath;