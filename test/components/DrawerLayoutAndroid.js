/* eslint no-unused-expressions: 0 */
import React from 'react';
import {DrawerLayoutAndroid} from '../../src/react-native';
import {expect} from 'chai';
import {mount} from 'enzyme';

describe('DrawerLayoutAndroid', () => {
  it('should render an empty DrawerLayoutAndroid', () => {
    const wrapper = mount(
      <DrawerLayoutAndroid renderNavigationView={() => {}} />,
    );
    expect(wrapper.children()).to.be.have.length(1);
  });

  it('should have static properties for the positions', () => {
    expect(DrawerLayoutAndroid.positions).to.be.an.object;
    expect(DrawerLayoutAndroid.positions).to.have.property('Left');
    expect(DrawerLayoutAndroid.positions).to.have.property('Right');
  });
});
