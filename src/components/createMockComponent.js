import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

function createMockComponent(displayName) {
  return createReactClass({
    displayName,
    propTypes: {
      children: PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', null, this.props.children);
    },
  });
}

module.exports = createMockComponent;
