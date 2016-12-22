import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    render() {
      return React.createElement('react-native-mock', null, this.props.children);
    },
  });
}

module.exports = createMockComponent;
