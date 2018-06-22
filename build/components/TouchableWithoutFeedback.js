


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var TouchableWithoutFeedback=(0,_createReactClass2['default'])({
displayName:'TouchableWithoutFeedback',
propTypes:{
accessible:_propTypes2['default'].bool,
accessibilityComponentType:_propTypes2['default'].oneOf(_View2['default'].AccessibilityComponentType),
accessibilityTraits:_propTypes2['default'].oneOfType([
_propTypes2['default'].oneOf(_View2['default'].AccessibilityTraits),
_propTypes2['default'].arrayOf(_propTypes2['default'].oneOf(_View2['default'].AccessibilityTraits))]),

/**
     * If true, disable all interactions for this component.
     */
disabled:_propTypes2['default'].bool,
/**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
onPress:_propTypes2['default'].func,
onPressIn:_propTypes2['default'].func,
onPressOut:_propTypes2['default'].func,
/**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
onLayout:_propTypes2['default'].func,

onLongPress:_propTypes2['default'].func,

/**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
delayPressIn:_propTypes2['default'].number,
/**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
delayPressOut:_propTypes2['default'].number,
/**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
delayLongPress:_propTypes2['default'].number,
/**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
pressRetentionOffset:_EdgeInsetsPropType2['default'],
/**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
hitSlop:_EdgeInsetsPropType2['default'],
children:_propTypes2['default'].node},

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this.props.children);
}return render;}()});/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableWithoutFeedback.js
 */
module.exports=TouchableWithoutFeedback;