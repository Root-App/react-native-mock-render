import React from 'react';
import FlatList from '../../src/components/FlatList.js';
import View from '../../src/components/View.js';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('FlatList', () => {
  let wrapper;
  const data = [
    { value: 'item-1', key: 'key-1', id: 'id-1' },
    { value: 'item-2', key: 'key-2', id: 'id-2' },
    { value: 'item-3', key: 'key-3', id: 'id-3' },
  ];

  it('renders its children', () => {
    wrapper = mount(
      <FlatList
        data={data}
        renderItem={
          ({ item: { value } }) => <View value={value} testID="child-view" />
        }
      />
    );
    const children = wrapper.find('FlatList').find('View[testID="child-view"]');
    const values = children.map(child => child.prop('value'));
    expect(values).to.deep.equal([
      'item-1',
      'item-2',
      'item-3',
    ]);
  });

  it('uses the key extractor to retrieve the childs key', () => {
    wrapper = mount(
      <FlatList
        data={data}
        renderItem={
          () => <View testID="child-view" />
        }
        keyExtractor={
          ({ id }) => id
        }
      />
    );
    const children = wrapper.find('FlatList').find('View[testID="child-view"]');
    const keys = children.map(child => child.getElement().key);
    expect(keys).to.deep.equal([
      'id-1',
      'id-2',
      'id-3',
    ]);
  });

  it('defaults to using the items key property as the childs key', () => {
    wrapper = mount(
      <FlatList
        data={data}
        renderItem={
          () => <View testID="child-view" />
        }
      />
    );
    const children = wrapper.find('FlatList').find('View[testID="child-view"]');
    const keys = children.map(child => child.getElement().key);
    expect(keys).to.deep.equal([
      'key-1',
      'key-2',
      'key-3',
    ]);
  });

  it('falls back to using the items index as the childs key', () => {
    const dataWithoutKeys = [
      { value: 'item-1' },
      { value: 'item-2' },
      { value: 'item-3' },
    ];
    wrapper = mount(
      <FlatList
        data={dataWithoutKeys}
        renderItem={
          () => <View testID="child-view" />
        }
      />
    );
    const children = wrapper.find('FlatList').find('View[testID="child-view"]');
    const keys = children.map(child => child.getElement().key);
    expect(keys).to.deep.equal([
      '0',
      '1',
      '2',
    ]);
  });
});
