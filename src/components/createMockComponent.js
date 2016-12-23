import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', null, this.props.children);
    },
  });
}

module.exports = createMockComponent;
