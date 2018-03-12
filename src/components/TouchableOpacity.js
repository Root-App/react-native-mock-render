/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableOpacity = createReactClass({
  displayName: 'TouchableOpacity',
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: PropTypes.number,
  },

  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  },
});

module.exports = TouchableOpacity;
