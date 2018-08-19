import React from 'react';
import View from '../../src/components/View.js';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Animated from '../../src/api/Animated';

describe('Animated.View', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Animated.View>
        <View testID="child-view" />
      </Animated.View>
    );
  });

  it('renders its children', () => {
    expect(wrapper.findWhere((n) => n.props().testID === 'child-view')).to.have.length(1);
  });

  it('implements setNativeProps', () => {
    const setNativeProps = wrapper.instance().setNativeProps;
    expect(typeof setNativeProps).to.equal('function');
  });
});

describe('Animated.divide', () => {
  it('divides integers', () => {
    const divided = Animated.divide(new Animated.Value(1), new Animated.Value(2));
    expect(divided.__getValue()).to.equal(0.5);
  });
});
