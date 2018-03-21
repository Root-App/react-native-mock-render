import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import ScrollView from './ScrollView';
import ViewabilityConfig from '../propTypes/ViewabilityConfig';
import ViewabilityConfigCallbackPair from '../propTypes/ViewabilityConfigCallbackPair';

const SCROLLVIEW_REF = 'virtualizedviewscroll';


const VirtualizedList = createReactClass({
  displayName: 'VirtualizedList',
  propTypes: {
    ...ScrollView.propTypes,

    /**
    * Takes an item from data and renders it into the list
    */
    renderItem: PropTypes.func,
    /**
    * The default accessor functions assume this is an array
    * of objects with shape {key: string} but you can override
    * getItem, getItemCount, and keyExtractor to handle any type of index-based data.
    */
    data: PropTypes.any,
    /**
    * A generic accessor for extracting an item from any sort of data blob.
    */
    getItem: PropTypes.func,
    /**
    * Determines how many items are in the data blob.
    */
    getItemCount: PropTypes.func,
    /**
    * debug will turn on extra logging and visual overlays to aid
    * with debugging both usage and implementation, but with a significant perf hit.
    */
    debug: PropTypes.bool,
    /**
    * A marker property for telling the list to re-render (since it implements PureComponent).
    * If any of your renderItem, Header, Footer, etc. functions depend on
    * anything outside of the data prop, stick it here and treat it immutably.
    */
    extraData: PropTypes.any,
    /**
    * getItemLayout is an optional optimization that let us skip measurement of dynamic
    * content if you know the height of items a priori. getItemLayout is the most efficient,
    * and is easy to use if you have fixed height items, for example:
    * getItemLayout={(data, index) => (
    *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    * )}
    * Adding getItemLayout can be a great performance boost for lists of several hundred items.
    * Remember to include separator length (height or width) in your offset calculation if you
    * specify ItemSeparatorComponent.
    */
    getItemLayout: PropTypes.func,
    /**
    * Instead of starting at the top with the first item, start at initialScrollIndex.
    * This disables the "scroll to top" optimization that keeps the first
    * initialNumToRender items always rendered and immediately renders the items
    * starting at this initial index. Requires getItemLayout to be implemented.
    */
    initialScrollIndex: PropTypes.number,
    /**
    * Reverses the direction of scroll. Uses scale transforms of -1.
    */
    inverted: PropTypes.bool,
    /**
    * Each cell is rendered using this element. Can be a React Component Class,or a
    * render function. Defaults to using View.
    */
    CellRendererComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    /**
    * Rendered when the list is empty. Can be a React Component Class,
    * a render function, or a rendered element.
    */
    ListEmptyComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    /**
    * Rendered at the bottom of all the items. Can be a React Component
    * Class, a render function, or a rendered element.
    */
    ListFooterComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    /**
    * Rendered at the top of all the items. Can be a React Component Class,
    * a render function, or a rendered element.
    */
    ListHeaderComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    onLayout: PropTypes.func,
    /**
    * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
    * Make sure to also set the refreshing prop correctly.
    */
    onRefresh: PropTypes.func,
    /**
    * Used to handle failures when scrolling to an index that has not been measured yet.
    * Recommended action is to either compute your own offset and scrollTo it,
    * or scroll as far as possible and then try again after more items have been rendered.
    */
    onScrollToIndexFailed: PropTypes.func,
    /**
    * Called when the viewability of rows changes, as defined by the viewabilityConfig prop.
    */
    onViewableItemsChanged: PropTypes.func,
    /**
    * Set this true while waiting for new data from a refresh.
    */
    refreshing: PropTypes.bool,
    /**
    * This may improve scroll performance for large lists.
    */
    removeClippedSubviews: PropTypes.bool,
    /**
    * Render a custom scroll component, e.g. with a differently styled RefreshControl.
    */
    renderScrollComponent: PropTypes.func,
    /**
    * See ViewabilityHelper.js for flow type and further documentation.
    */
    viewabilityConfig: ViewabilityConfig,
    /**
    * List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged
    * will be called when its corresponding ViewabilityConfig's conditions are met.
    * See ViewabilityHelper.js for flow type and further documentation.
    */
    viewabilityConfigCallbackPairs: PropTypes.arrayOf(ViewabilityConfigCallbackPair),
    /**
    * If true, renders items next to each other horizontally instead of stacked vertically.
    */
    horizontal: PropTypes.bool,
    /**
    * How many items to render in the initial batch. This should be enough to fill
    * the screen but not much more. Note these items will never be unmounted as
    * part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.
    */
    initialNumToRender: PropTypes.number,
    /**
    * Used to extract a unique key for a given item at the specified index.
    * Key is used for caching and as the react key to track item re-ordering.
    * The default extractor checks item.key, then falls back to using the index, like React does.
    */
    keyExtractor: PropTypes.func,
    /**
    * The maximum number of items to render in each incremental render batch.
    * The more rendered at once, the better the fill rate, but responsiveness
    * my suffer because rendering content may interfere with responding to
    * button taps or other interactions.
    */
    maxToRenderPerBatch: PropTypes.number,
    /**
    * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
    */
    onEndReached: PropTypes.func,
    /**
    * How far from the end (in units of visible length of the list) the bottom edge
    * of the list must be from the end of the content to trigger the onEndReached callback.
    * Thus a value of 0.5 will trigger onEndReached when the end of the content is
    * within half the visible length of the list.
    */
    onEndReachedThreshold: PropTypes.number,
    /**
    * Amount of time between low-pri item render batches, e.g. for rendering
    * items quite a ways off screen. Similar fill rate/responsiveness tradeoff as maxToRenderPerBatch.
    */
    updateCellsBatchingPeriod: PropTypes.number,
    /**
    * Determines the maximum number of items rendered outside of the visible area,
    * in units of visible lengths. So if your list fills the screen, then windowSize={21}
    * (the default) will render the visible screen area plus up to 10 screens above and
    * 10 below the viewport. Reducing this number will reduce memory consumption and may
    * improve performance, but will increase the chance that fast scrolling may
    * reveal momentary blank areas of unrendered content.
    */
    windowSize: PropTypes.number,
    /**
    * Set this when offset is needed for the loading indicator to show correctly.
    */
    progressViewOffset: PropTypes.number,
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

module.exports = VirtualizedList;
