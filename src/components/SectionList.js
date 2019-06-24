import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import VirtualizedSectionList from './VirtualizedSectionList';
import ScrollView from './ScrollView';
import View from './View';

import {
  SectionBase as _SectionBase,
} from './VirtualizedSectionList';

const SCROLLVIEW_REF = 'sectionlistscroll';

const SectionList = createReactClass({
  displayName: 'SectionList',
  propTypes: {
    ...VirtualizedSectionList.propTypes,

    /**
     * The actual data to render, akin to the `data` prop in [`<FlatList>`](/react-native/docs/flatlist.html).
     *
     * General shape:
     *
     *     sections: $ReadOnlyArray<{
     *       data: $ReadOnlyArray<SectionItem>,
     *       renderItem?: ({item: SectionItem, ...}) => ?React.Element<*>,
     *       ItemSeparatorComponent?: ?ReactClass<{highlighted: boolean, ...}>,
     *     }>
     */
    sections: PropTypes.array.isRequired,

    /**
     * Default renderer for every item in every section. Can be over-ridden on a per-section basis.
     */
    renderItem: PropTypes.func,

    /**
     * Rendered in between each item, but not at the top or bottom. By default, `highlighted`,
     * `section`, and `[leading/trailing][Item/Separator]` props are provided. `renderItem` provides
     * `separators.highlight`/`unhighlight` which will update the `highlighted` prop, but you can also
     * add custom props with `separators.updateProps`.
     */
    ItemSeparatorComponent: PropTypes.element,

    /**
     * Rendered at the very beginning of the list. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListHeaderComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    /**
     * Rendered when the list is empty. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListEmptyComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    /**
     * Rendered at the very end of the list. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListFooterComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    /**
     * Rendered at the top and bottom of each section (note this is different from
     * `ItemSeparatorComponent` which is only rendered between items). These are intended to separate
     * sections from the headers above and below and typically have the same highlight response as
     * `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`,
     * and any custom props from `separators.updateProps`.
     */
    SectionSeparatorComponent: PropTypes.element,

    /**
     * A marker property for telling the list to re-render (since it implements `PureComponent`). If
     * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
     * `data` prop, stick it here and treat it immutably.
     */
    extraData: PropTypes.any,

    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not
     * much more. Note these items will never be unmounted as part of the windowed rendering in order
     * to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender: PropTypes.number,

    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted: PropTypes.bool,

    /**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching
     * and as the react key to track item re-ordering. The default extractor checks item.key, then
     * falls back to using the index, like react does. Note that this sets keys for each item, but
     * each overall section still needs its own key.
     */
    keyExtractor: PropTypes.func,

    /**
     * Called once when the scroll position gets within `onEndReachedThreshold` of the rendered
     * content.
     */
    onEndReached: PropTypes.func,

    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the
     * list must be from the end of the content to trigger the `onEndReached` callback.
     * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
     * within half the visible length of the list.
     */
    onEndReachedThreshold: PropTypes.number,

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
     * sure to also set the `refreshing` prop correctly.
     */
    onRefresh: PropTypes.func,

    /**
     * Called when the viewability of rows changes, as defined by the
     * `viewabilityConfig` prop.
     */
    onViewableItemsChanged: PropTypes.func,

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing: PropTypes.bool,

    /**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews: PropTypes.bool,

    /**
     * Rendered at the top of each section. These stick to the top of the `ScrollView` by default on
     * iOS. See `stickySectionHeadersEnabled`.
     */
    renderSectionHeader: PropTypes.func,

    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter: PropTypes.func,

    /**
     * Makes section headers stick to the top of the screen until the next one pushes it off. Only
     * enabled by default on iOS because that is the platform standard there.
     */
    stickySectionHeadersEnabled: PropTypes.bool,
  },

  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToLocation( animated, itemIndex, sectionIndex, viewOffset, viewPosition) {
    this.getScrollResponder().scrollResponderScrollTo(0, viewPosition || 0);
  },

  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {

  },

  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {

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

  getScrollableNode() {

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
    return (
      <ScrollView>
        {this.props.sections.map((section, index) => {
          const renderFn = section.renderItem? section.renderItem : this.props.renderItem;
          return (
            <View key={`section-${index}-${section.title}`}>
              {this.props.renderSectionHeader({
                section,
              })}
              {section.data.map((item, index) => {
                return renderFn({
                  item,
                  index,
                  separators: {
                    highlight: () => {},
                    unhighlight: () => {},
                    updateProps: () => {},
                  },
                });
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  },

  render() {
    return React.createElement('react-native-mock', null, this._renderChildren());
  },
});

module.exports = SectionList;
