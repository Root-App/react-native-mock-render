/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js
 */
import PropTypes from 'prop-types';
import ViewabilityConfig from './ViewabilityConfig';

const ViewabilityConfigCallbackPair = PropTypes.shape({
  viewabilityConfig: ViewabilityConfig,
  onViewableItemsChanged: PropTypes.shape({
    viewableItems: PropTypes.array,
    changed: PropTypes.array,
  }),
});

module.exports = ViewabilityConfigCallbackPair;
