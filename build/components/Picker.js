var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _createMockComponent=require('./createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var Picker=(0,_createReactClass2['default'])({
displayName:'Picker',
propTypes:{
children:_propTypes2['default'].node},

statics:{
Item:(0,_createMockComponent2['default'])('Picker.Item')},

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this.props.children);
}return render;}()});


module.exports=Picker;