var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function createMockComponent(displayName){
return(0,_createReactClass2['default'])({
displayName:displayName,
propTypes:{
children:_propTypes2['default'].node},

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this.props.children);
}return render;}()});

}

module.exports=createMockComponent;