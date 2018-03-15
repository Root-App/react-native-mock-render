import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import createMockComponent from './createMockComponent';

const Picker = createReactClass({
  displayName: 'Picker',
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  }
});

module.exports = Picker;
