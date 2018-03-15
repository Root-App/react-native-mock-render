import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = createReactClass({
  displayName: 'TouchableNativeFeedback',
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: PropTypes.object,
    children: PropTypes.node
  },
  statics: {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  },
  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  }
});

module.exports = TouchableNativeFeedback;
