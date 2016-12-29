import React from 'react';
import createMockComponent from './createMockComponent';

const Picker = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  }
});

module.exports = Picker;
