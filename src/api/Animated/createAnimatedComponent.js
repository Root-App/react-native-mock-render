import React, { PropTypes } from 'react';

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
