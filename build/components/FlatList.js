var _jsxFileName='src/components/FlatList.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _VirtualizedList=require('./VirtualizedList');var _VirtualizedList2=_interopRequireDefault(_VirtualizedList);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _StyleSheetPropType=require('../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _ViewStylePropTypes=require('../propTypes/ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var stylePropType=(0,_StyleSheetPropType2['default'])(_ViewStylePropTypes2['default']);

var SCROLLVIEW_REF='flatlistscroll';


var FlatList=(0,_createReactClass2['default'])({
displayName:'FlatList',
propTypes:_extends({},
_VirtualizedList2['default'].propTypes,{

/**
    * Takes an item from data and renders it into the list.
    * Provides additional metadata like index if you need it, as well as a more generic
    * separators.updateProps function which let you set whatever props you want to change
    * the rendering of either the leading separator or trailing separator in case the more
    * common highlight and unhighlight (which set the highlighted: boolean prop) are
    * insufficient for your use case.
    */
renderItem:_propTypes2['default'].func,
/**
    * For simplicity, data is just a plain array. If you want to use something else,
    * like an immutable list, use the underlying VirtualizedList directly.
    */
data:_propTypes2['default'].array,
/**
    * Rendered in between each item, but not at the top or bottom. By default,
    * highlighted and leadingItem props are provided. renderItem provides
    * separators.highlight/unhighlight which will update the highlighted prop,
    * but you can also add custom props with separators.updateProps.
    */
ItemSeparatorComponent:_propTypes2['default'].element,
/**
    * Optional custom style for multi-item rows generated when numColumns > 1.
    */
columnWrapperStyle:stylePropType,
/**
    * Multiple columns can only be rendered with horizontal={false} and will zig-zag
    * like a flexWrap layout. Items should all be the same height - masonry layouts are not supported.
    */
numColumns:_propTypes2['default'].number,
/**
    * May not have full feature parity and is meant for debugging and performance comparison.
    */
legacyImplementation:_propTypes2['default'].bool}),


scrollToEnd:function(){function scrollToEnd(){

}return scrollToEnd;}(),

scrollToIndex:function(){function scrollToIndex(){

}return scrollToIndex;}(),

scrollToItem:function(){function scrollToItem(){

}return scrollToItem;}(),

/**
  * Scroll to a specific content pixel offset in the list.
  * Param offset expects the offset to scroll to. In case of horizontal is true,
  * the offset is the x-value, in any other case the offset is the y-value.
  * Param animated (true by default) defines whether the list should do an animation while scrolling.
  */
scrollToOffset:function(){function scrollToOffset(){

}return scrollToOffset;}(),

recordInteraction:function(){function recordInteraction(){

}return recordInteraction;}(),

flashScrollIndicators:function(){function flashScrollIndicators(){

}return flashScrollIndicators;}(),

/**
   * Exports some data, e.g. for perf investigations or analytics.
   */
getMetrics:function(){function getMetrics(){// eslint-disable-line react/sort-comp
// It's fixed, but the linter doesnt want to recognise it...
return{
contentLength:this.scrollProperties.contentLength,
totalRows:this.props.dataSource.getRowCount(),
renderedRows:this.state.curRenderedRowsCount,
visibleRows:Object.keys(this._visibleRows).length};

}return getMetrics;}(),

scrollTo:function(){function scrollTo(destY,destX){
this.getScrollResponder().scrollResponderScrollTo(destX||0,destY||0);
}return scrollTo;}(),

/**
   * Provides a handle to the underlying scroll responder to support operations
   * such as scrollTo.
   */
getScrollResponder:function(){function getScrollResponder(){
return this.refs[SCROLLVIEW_REF]&&
this.refs[SCROLLVIEW_REF].getScrollResponder&&
this.refs[SCROLLVIEW_REF].getScrollResponder();
}return getScrollResponder;}(),

setNativeProps:function(){function setNativeProps(props){
this.refs[SCROLLVIEW_REF].setNativeProps(props);
}return setNativeProps;}(),

getDefaultProps:function(){function getDefaultProps(){
return{
renderScrollComponent:function(){function renderScrollComponent(props){return _react2['default'].createElement(_ScrollView2['default'],_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:118}}));}return renderScrollComponent;}()};

}return getDefaultProps;}(),

getInnerViewNode:function(){function getInnerViewNode(){
return this.refs[SCROLLVIEW_REF].getInnerViewNode();
}return getInnerViewNode;}(),

_renderChildren:function(){function _renderChildren(){var _this=this;
return this.props.data.map(function(item,index){return(
_this.props.renderItem({
item:item,
index:index,
separators:{
highlight:function(){function highlight(){}return highlight;}(),
unhighlight:function(){function unhighlight(){}return unhighlight;}(),
updateProps:function(){function updateProps(){}return updateProps;}()}}));});



}return _renderChildren;}(),

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this._renderChildren());
}return render;}()});


module.exports=FlatList;