import React from 'react';
import View from '../../src/components/View.js';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Animated from '../../src/api/Animated';

describe('Animated.View', () => {
  it('renders its children', () => {
    const wrapper = mount(
      <Animated.View>
        <View testID="child-view" />
      </Animated.View>
    );

    expect(wrapper.findWhere((n) => n.props().testID === 'child-view')).to.have.length(1);
  });
});
