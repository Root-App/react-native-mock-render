


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

/**
 * React Native's layout system is based on Flexbox and is powered both
 * on iOS and Android by an open source project called css-layout:
 * https://github.com/facebook/css-layout
 *
 * The implementation in css-layout is slightly different from what the
 * Flexbox spec defines - for example, we chose more sensible default
 * values. Please refer to the css-layout README for details.
 *
 * These properties are a subset of our styles that are consumed by the layout
 * algorithm and affect the positioning and sizing of views.
 */
var LayoutPropTypes={
width:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

height:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

top:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

left:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

right:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

bottom:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

minWidth:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

maxWidth:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

minHeight:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

maxHeight:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

margin:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginVertical:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginHorizontal:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginTop:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginBottom:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginLeft:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

marginRight:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

padding:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingVertical:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingHorizontal:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingTop:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingBottom:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingLeft:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

paddingRight:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),

borderWidth:_propTypes2['default'].number,
borderTopWidth:_propTypes2['default'].number,
borderRightWidth:_propTypes2['default'].number,
borderBottomWidth:_propTypes2['default'].number,
borderLeftWidth:_propTypes2['default'].number,

position:_propTypes2['default'].oneOf([
'absolute',
'relative']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
flexDirection:_propTypes2['default'].oneOf([
'row',
'column',
'row-reverse',
'column-reverse']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
flexWrap:_propTypes2['default'].oneOf([
'wrap',
'nowrap']),


// How to align children in the main direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
justifyContent:_propTypes2['default'].oneOf([
'flex-start',
'flex-end',
'center',
'space-between',
'space-around']),


// How to align children in the cross direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
alignItems:_propTypes2['default'].oneOf([
'flex-start',
'flex-end',
'center',
'stretch',
'baseline']),


// How to align the element in the cross direction
// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
alignSelf:_propTypes2['default'].oneOf([
'auto',
'flex-start',
'flex-end',
'center',
'stretch',
'baseline']),


overflow:_propTypes2['default'].oneOf([
'visible',
'hidden',
'scroll']),


// https://developer.mozilla.org/en-US/docs/Web/CSS/flex
flex:_propTypes2['default'].number,
flexGrow:_propTypes2['default'].number,
flexShrink:_propTypes2['default'].number,
flexBasis:_propTypes2['default'].oneOfType([
_propTypes2['default'].number,
_propTypes2['default'].string]),


aspectRatio:_propTypes2['default'].number,

zIndex:_propTypes2['default'].number};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/LayoutPropTypes.js
 */
module.exports=LayoutPropTypes;