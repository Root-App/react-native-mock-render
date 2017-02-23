import React from 'react';

function createAnimatedComponent(Component) {
  const refName = 'node';

  class AnimatedComponent extends React.Component {
    render() {
      return (
        <Component
          ref={refName}
        />
      );
    }
  }

  return AnimatedComponent;
}

module.exports = createAnimatedComponent;
