import React from 'react';
import PropTypes from 'prop-types';

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React.Component {
    static propTypes = {
      children: PropTypes.node,
    }

    setNativeProps() {
    }

    render() {
      return (
        <Component
          ref={() => {}}
        >
          {this.props.children}
        </Component>
      );
    }
  }

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;
