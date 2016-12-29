import React from 'react';
import createMockComponent from './createMockComponent';

const TabBarIOS = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  statics: {
    Item: createMockComponent('TabBarIOS.Item')
  },
  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  }
});

module.exports = TabBarIOS;
