


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var ViewabilityConfig=_propTypes2['default'].shape({
minimumViewTime:_propTypes2['default'].number,
viewAreaCoveragePercentThreshold:_propTypes2['default'].number,
itemVisiblePercentThreshold:_propTypes2['default'].number,
waitForInteraction:_propTypes2['default'].bool});/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js
 */
module.exports=ViewabilityConfig;