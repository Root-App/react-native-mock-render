var _jsxFileName='src/components/VirtualizedList.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _ViewabilityConfig=require('../propTypes/ViewabilityConfig');var _ViewabilityConfig2=_interopRequireDefault(_ViewabilityConfig);
var _ViewabilityConfigCallbackPair=require('../propTypes/ViewabilityConfigCallbackPair');var _ViewabilityConfigCallbackPair2=_interopRequireDefault(_ViewabilityConfigCallbackPair);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var SCROLLVIEW_REF='virtualizedviewscroll';


var VirtualizedList=(0,_createReactClass2['default'])({
displayName:'VirtualizedList',
propTypes:_extends({},
_ScrollView2['default'].propTypes,{

/**
    * Takes an item from data and renders it into the list
    */
renderItem:_propTypes2['default'].func,
/**
    * The default accessor functions assume this is an array
    * of objects with shape {key: string} but you can override
    * getItem, getItemCount, and keyExtractor to handle any type of index-based data.
    */
data:_propTypes2['default'].any,
/**
    * A generic accessor for extracting an item from any sort of data blob.
    */
getItem:_propTypes2['default'].func,
/**
    * Determines how many items are in the data blob.
    */
getItemCount:_propTypes2['default'].func,
/**
    * debug will turn on extra logging and visual overlays to aid
    * with debugging both usage and implementation, but with a significant perf hit.
    */
debug:_propTypes2['default'].bool,
/**
    * A marker property for telling the list to re-render (since it implements PureComponent).
    * If any of your renderItem, Header, Footer, etc. functions depend on
    * anything outside of the data prop, stick it here and treat it immutably.
    */
extraData:_propTypes2['default'].any,
/**
    * getItemLayout is an optional optimization that let us skip measurement of dynamic
    * content if you know the height of items a priori. getItemLayout is the most efficient,
    * and is easy to use if you have fixed height items, for example:
    * getItemLayout={(data, index) => (
    *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    * )}
    * Adding getItemLayout can be a great performance boost for lists of several hundred items.
    * Remember to include separator length (height or width) in your offset calculation if you
    * specify ItemSeparatorComponent.
    */
getItemLayout:_propTypes2['default'].func,
/**
    * Instead of starting at the top with the first item, start at initialScrollIndex.
    * This disables the "scroll to top" optimization that keeps the first
    * initialNumToRender items always rendered and immediately renders the items
    * starting at this initial index. Requires getItemLayout to be implemented.
    */
initialScrollIndex:_propTypes2['default'].number,
/**
    * Reverses the direction of scroll. Uses scale transforms of -1.
    */
inverted:_propTypes2['default'].bool,
/**
    * Each cell is rendered using this element. Can be a React Component Class,or a
    * render function. Defaults to using View.
    */
CellRendererComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),

/**
    * Rendered when the list is empty. Can be a React Component Class,
    * a render function, or a rendered element.
    */
ListEmptyComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),

/**
    * Rendered at the bottom of all the items. Can be a React Component
    * Class, a render function, or a rendered element.
    */
ListFooterComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),

/**
    * Rendered at the top of all the items. Can be a React Component Class,
    * a render function, or a rendered element.
    */
ListHeaderComponent:_propTypes2['default'].oneOfType([
_propTypes2['default'].element,
_propTypes2['default'].func]),

onLayout:_propTypes2['default'].func,
/**
    * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
    * Make sure to also set the refreshing prop correctly.
    */
onRefresh:_propTypes2['default'].func,
/**
    * Used to handle failures when scrolling to an index that has not been measured yet.
    * Recommended action is to either compute your own offset and scrollTo it,
    * or scroll as far as possible and then try again after more items have been rendered.
    */
onScrollToIndexFailed:_propTypes2['default'].func,
/**
    * Called when the viewability of rows changes, as defined by the viewabilityConfig prop.
    */
onViewableItemsChanged:_propTypes2['default'].func,
/**
    * Set this true while waiting for new data from a refresh.
    */
refreshing:_propTypes2['default'].bool,
/**
    * This may improve scroll performance for large lists.
    */
removeClippedSubviews:_propTypes2['default'].bool,
/**
    * Render a custom scroll component, e.g. with a differently styled RefreshControl.
    */
renderScrollComponent:_propTypes2['default'].func,
/**
    * See ViewabilityHelper.js for flow type and further documentation.
    */
viewabilityConfig:_ViewabilityConfig2['default'],
/**
    * List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged
    * will be called when its corresponding ViewabilityConfig's conditions are met.
    * See ViewabilityHelper.js for flow type and further documentation.
    */
viewabilityConfigCallbackPairs:_propTypes2['default'].arrayOf(_ViewabilityConfigCallbackPair2['default']),
/**
    * If true, renders items next to each other horizontally instead of stacked vertically.
    */
horizontal:_propTypes2['default'].bool,
/**
    * How many items to render in the initial batch. This should be enough to fill
    * the screen but not much more. Note these items will never be unmounted as
    * part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.
    */
initialNumToRender:_propTypes2['default'].number,
/**
    * Used to extract a unique key for a given item at the specified index.
    * Key is used for caching and as the react key to track item re-ordering.
    * The default extractor checks item.key, then falls back to using the index, like React does.
    */
keyExtractor:_propTypes2['default'].func,
/**
    * The maximum number of items to render in each incremental render batch.
    * The more rendered at once, the better the fill rate, but responsiveness
    * my suffer because rendering content may interfere with responding to
    * button taps or other interactions.
    */
maxToRenderPerBatch:_propTypes2['default'].number,
/**
    * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
    */
onEndReached:_propTypes2['default'].func,
/**
    * How far from the end (in units of visible length of the list) the bottom edge
    * of the list must be from the end of the content to trigger the onEndReached callback.
    * Thus a value of 0.5 will trigger onEndReached when the end of the content is
    * within half the visible length of the list.
    */
onEndReachedThreshold:_propTypes2['default'].number,
/**
    * Amount of time between low-pri item render batches, e.g. for rendering
    * items quite a ways off screen. Similar fill rate/responsiveness tradeoff as maxToRenderPerBatch.
    */
updateCellsBatchingPeriod:_propTypes2['default'].number,
/**
    * Determines the maximum number of items rendered outside of the visible area,
    * in units of visible lengths. So if your list fills the screen, then windowSize={21}
    * (the default) will render the visible screen area plus up to 10 screens above and
    * 10 below the viewport. Reducing this number will reduce memory consumption and may
    * improve performance, but will increase the chance that fast scrolling may
    * reveal momentary blank areas of unrendered content.
    */
windowSize:_propTypes2['default'].number,
/**
    * Set this when offset is needed for the loading indicator to show correctly.
    */
progressViewOffset:_propTypes2['default'].number}),


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
renderScrollComponent:function(){function renderScrollComponent(props){return _react2['default'].createElement(_ScrollView2['default'],_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:255}}));}return renderScrollComponent;}()};

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


module.exports=VirtualizedList;