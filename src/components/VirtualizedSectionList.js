import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import View from './View';
import ScrollView from './ScrollView';

const SCROLLVIEW_REF = 'virtualizedsectionviewscroll';

const VirtualizedSectionList = createReactClass({
  displayName: 'VirtualizedSectionList',
  propTypes: {
    ...View.propTypes,

    /**
     * The data for rendering items in this section.
     */
    data: PropTypes.array,

    /**
     * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
     * the array index will be used by default.
     */
    key: PropTypes.string,

    // Optional props will override list-wide props just for this section.
    renderItem: PropTypes.func,

    ItemSeparatorComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    keyExtractor: PropTypes.func,

    sections: PropTypes.array.isRequired,

    /**
     * Rendered after the last item in the last section.
     */
    ListFooterComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    /**
     * Rendered at the very beginning of the list.
     */
    ListHeaderComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    /**
     * Rendered at the top of each section.
     */
    renderSectionHeader: PropTypes.func,

    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter: PropTypes.func,

    /**
     * Rendered at the bottom of every Section, except the very last one, in place of the normal
     * ItemSeparatorComponent.
     */
    SectionSeparatorComponent: PropTypes.element,


    onEndReached: PropTypes.func,

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
  },

  scrollToLocation(animated, itemIndex, sectionIndex, viewPosition) {
    this.getScrollResponder().scrollResponderScrollTo(0, viewPosition || 0);
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

module.exports = VirtualizedSectionList;
