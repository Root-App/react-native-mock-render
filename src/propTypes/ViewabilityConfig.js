/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js
 */
import PropTypes from 'prop-types';

const ViewabilityConfig = PropTypes.shape({
  minimumViewTime: PropTypes.number,
  viewAreaCoveragePercentThreshold: PropTypes.number,
  itemVisiblePercentThreshold: PropTypes.number,
  waitForInteraction: PropTypes.bool,
});

module.exports = ViewabilityConfig;
