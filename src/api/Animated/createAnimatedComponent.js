import React from 'react';
import PropTypes from 'prop-types';

function createAnimatedComponent(Component) {
  const refName = 'node';

  class AnimatedComponent extends React.Component {
    static propTypes = {
      children: PropTypes.node,
    }

    render() {
      return (
        <Component
          ref={refName}
        >
          {this.props.children}
        </Component>
      );
    }
  }

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;
