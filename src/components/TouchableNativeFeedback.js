
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = React.createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: React.PropTypes.object,
    children: React.PropTypes.node
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
