


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _ViewabilityConfig=require('./ViewabilityConfig');var _ViewabilityConfig2=_interopRequireDefault(_ViewabilityConfig);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js
 */var ViewabilityConfigCallbackPair=_propTypes2['default'].shape({
viewabilityConfig:_ViewabilityConfig2['default'],
onViewableItemsChanged:_propTypes2['default'].shape({
viewableItems:_propTypes2['default'].array,
changed:_propTypes2['default'].array})});



module.exports=ViewabilityConfigCallbackPair;