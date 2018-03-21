import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import VirtualizedList from './VirtualizedList';
import ScrollView from './ScrollView';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import ViewStylePropTypes from '../propTypes/ViewStylePropTypes';

const stylePropType = styleSheetPropType(ViewStylePropTypes);

const SCROLLVIEW_REF = 'flatlistscroll';


const FlatList = createReactClass({
  displayName: 'FlatList',
  propTypes: {
    ...VirtualizedList.propTypes,

    /**
    * Takes an item from data and renders it into the list.
    * Provides additional metadata like index if you need it, as well as a more generic
    * separators.updateProps function which let you set whatever props you want to change
    * the rendering of either the leading separator or trailing separator in case the more
    * common highlight and unhighlight (which set the highlighted: boolean prop) are
    * insufficient for your use case.
    */
    renderItem: PropTypes.func,
    /**
    * For simplicity, data is just a plain array. If you want to use something else,
    * like an immutable list, use the underlying VirtualizedList directly.
    */
    data: PropTypes.array,
    /**
    * Rendered in between each item, but not at the top or bottom. By default,
    * highlighted and leadingItem props are provided. renderItem provides
    * separators.highlight/unhighlight which will update the highlighted prop,
    * but you can also add custom props with separators.updateProps.
    */
    ItemSeparatorComponent: PropTypes.element,
    /**
    * Optional custom style for multi-item rows generated when numColumns > 1.
    */
    columnWrapperStyle: stylePropType,
    /**
    * Multiple columns can only be rendered with horizontal={false} and will zig-zag
    * like a flexWrap layout. Items should all be the same height - masonry layouts are not supported.
    */
    numColumns: PropTypes.number,
    /**
    * May not have full feature parity and is meant for debugging and performance comparison.
    */
    legacyImplementation: PropTypes.bool,
  },

  scrollToEnd() {

  },

  scrollToIndex() {

  },

  scrollToItem() {

  },

  /**
  * Scroll to a specific content pixel offset in the list.
  * Param offset expects the offset to scroll to. In case of horizontal is true,
  * the offset is the x-value, in any other case the offset is the y-value.
  * Param animated (true by default) defines whether the list should do an animation while scrolling.
  */
  scrollToOffset() {

  },

  recordInteraction() {

  },

  flashScrollIndicators() {

  },

  /**
   * Exports some data, e.g. for perf investigations or analytics.
   */
  getMetrics() {  // eslint-disable-line react/sort-comp
    // It's fixed, but the linter doesnt want to recognise it...
    return {
      contentLength: this.scrollProperties.contentLength,
      totalRows: this.props.dataSource.getRowCount(),
      renderedRows: this.state.curRenderedRowsCount,
      visibleRows: Object.keys(this._visibleRows).length,
    };
  },

  scrollTo(destY, destX) {
    this.getScrollResponder().scrollResponderScrollTo(destX || 0, destY || 0);
  },

  /**
   * Provides a handle to the underlying scroll responder to support operations
   * such as scrollTo.
   */
  getScrollResponder() {
    return this.refs[SCROLLVIEW_REF] &&
      this.refs[SCROLLVIEW_REF].getScrollResponder &&
      this.refs[SCROLLVIEW_REF].getScrollResponder();
  },

  setNativeProps(props) {
    this.refs[SCROLLVIEW_REF].setNativeProps(props);
  },

  getDefaultProps() {
    return {
      renderScrollComponent: (props) => <ScrollView {...props} />
    };
  },

  getInnerViewNode() {
    return this.refs[SCROLLVIEW_REF].getInnerViewNode();
  },

  _renderChildren() {
    return this.props.data.map((item, index) =>
      this.props.renderItem({
        item,
        index,
        separators: {
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        },
      })
    );
  },

  render() {
    return React.createElement('react-native-mock', null, this._renderChildren());
  },
});

module.exports = FlatList;
