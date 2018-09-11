import React from 'react';
import View from '../../src/components/View.js';
import {expect} from 'chai';
import {mount} from 'enzyme';

describe('View', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <View>
        <View testID="child-view" />
      </View>,
    );
  });

  it('renders its children', () => {
    expect(
      wrapper.findWhere(n => n.props().testID === 'child-view'),
    ).to.have.length(1);
  });

  it('implements setNativeProps', () => {
    const setNativeProps = wrapper.instance().setNativeProps;
    expect(typeof setNativeProps).to.equal('function');
  });
});
