/**
 * https://github.com/facebook/react-native/blob/master/Libraries/react-native/react-native.js
 */
import React from 'react';

import createMockComponent from './components/createMockComponent';

// Export React, plus some native additions.
const ReactNative = {
  // APIs
  ActionSheetIOS: require('./api/ActionSheetIOS'),
  Alert: require('./api/Alert'),
  AlertIOS: require('./api/AlertIOS'),
  Animated: require('./api/Animated'),
  AppRegistry: require('./api/AppRegistry'),
  AppState: require('./api/AppState'),
  AppStateIOS: require('./api/AppStateIOS'),
  AsyncStorage: require('./api/AsyncStorage'),
  BackAndroid: require('./api/BackAndroid'),
  BackHandler: require('./api/BackAndroid'),
  CameraRoll: require('./api/CameraRoll'),
  Clipboard: require('./NativeModules/Clipboard'),
  DatePickerAndroid: require('./api/DatePickerAndroid'),
  Dimensions: require('./api/Dimensions'),
  Easing: require('./api/Animated/Easing'),
  findNodeHandle: require('./api/findNodeHandle'),
  ImagePickerIOS: require('./api/ImagePickerIOS'),
  IntentAndroid: require('./api/IntentAndroid'),
  InteractionManager: require('./api/InteractionManager'),
  Keyboard: require('./api/Keyboard'),
  LayoutAnimation: require('./api/LayoutAnimation'),
  Linking: require('./api/Linking'),
  LinkingIOS: require('./api/LinkingIOS'),
  NetInfo: require('./api/NetInfo'),
  PanResponder: require('./api/PanResponder'),
  PixelRatio: require('./api/PixelRatio'),
  PushNotificationIOS: require('./api/PushNotificationIOS'),
  Settings: require('./api/Settings'),
  StatusBarIOS: require('./api/StatusBarIOS'),
  StyleSheet: require('./api/StyleSheet'),
  TimePickerAndroid: require('./api/TimePickerAndroid'),
  UIManager: require('./NativeModules/UIManager'),
  VibrationIOS: require('./api/VibrationIOS'),

  // Components
  ActivityIndicator: require('./components/ActivityIndicator'),
  ActivityIndicatorIOS: require('./components/ActivityIndicatorIOS'),
  Button: createMockComponent('Button'),
  DatePickerIOS: createMockComponent('DatePickerIOS'),
  DrawerLayoutAndroid: require('./components/DrawerLayoutAndroid'),
  FlatList: require('./components/FlatList'),
  Image: require('./components/Image'),
  ImageBackground: require('./components/ImageBackground'),
  ImageEditor: createMockComponent('ImageEditor'),
  ImageStore: createMockComponent('ImageStore'),
  KeyboardAvoidingView: createMockComponent('KeyboardAvoidingView'),
  ListView: require('./components/ListView'),
  MapView: createMockComponent('MapView'),
  Modal: createMockComponent('Modal'),
  Navigator: require('./components/Navigator'),
  NavigatorIOS: createMockComponent('NavigatorIOS'),
  Picker: require('./components/Picker'),
  PickerIOS: createMockComponent('PickerIOS'),
  ProgressBarAndroid: createMockComponent('ProgressBarAndroid'),
  ProgressViewIOS: createMockComponent('ProgressViewIOS'),
  PullToRefreshViewAndroid: createMockComponent('PullToRefreshViewAndroid'),
  RecyclerViewBackedScrollView: createMockComponent('RecyclerViewBackedScrollView'),
  RefreshControl: createMockComponent('RefreshControl'),
  SafeAreaView: createMockComponent('SafeAreaView'),
  ScrollView: require('./components/ScrollView'),
  SectionList: require('./components/SectionList'),
  SegmentedControlIOS: createMockComponent('SegmentedControlIOS'),
  SliderIOS: createMockComponent('SliderIOS'),
  SnapshotViewIOS: createMockComponent('SnapshotViewIOS'),
  StatusBar: require('./components/StatusBar'),
  Switch: createMockComponent('Switch'),
  SwitchAndroid: createMockComponent('SwitchAndroid'),
  SwitchIOS: createMockComponent('SwitchIOS'),
  TabBarIOS: require('./components/TabBarIOS'),
  Text: require('./components/Text'),
  TextInput: require('./components/TextInput'),
  ToastAndroid: createMockComponent('ToastAndroid'),
  ToolbarAndroid: createMockComponent('ToolbarAndroid'),
  Touchable: createMockComponent('Touchable'),
  TouchableHighlight: createMockComponent('TouchableHighlight'),
  TouchableNativeFeedback: require('./components/TouchableNativeFeedback'),
  TouchableOpacity: require('./components/TouchableOpacity'),
  TouchableWithoutFeedback: require('./components/TouchableWithoutFeedback'),
  View: require('./components/View'),
  ViewPagerAndroid: createMockComponent('ViewPagerAndroid'),
  VirtualizedList: require('./components/VirtualizedList'),
  VirtualizedSectionList: require('./components/VirtualizedSectionList'),
  WebView: require('./components/WebView'),

  // Libraries
  I18nManager: require('./Libraries/ReactNative/I18nManager'),
  NativeEventEmitter: require('./Libraries/EventEmitter/NativeEventEmitter'),
  NavigationExperimental: require('./Libraries/NavigationExperimental'),
  Share: require('./Libraries/Share/Share'),

  // Plugins
  DeviceEventEmitter: require('./plugins/DeviceEventEmitter'),
  NativeAppEventEmitter: require('./plugins/NativeAppEventEmitter'),
  NativeModules: require('./NativeModules'),
  Platform: require('./plugins/Platform'),
  processColor: require('./plugins/processColor'),
  requireNativeComponent: require('./plugins/requireNativeComponent'),

  // Prop Types
  ColorPropType: require('./propTypes/ColorPropType'),
  EdgeInsetsPropType: require('./propTypes/EdgeInsetsPropType'),
  PointPropType: require('./propTypes/PointPropType'),
  ViewPropTypes: require('./propTypes/ViewPropTypes'),
};


// See http://facebook.github.io/react/docs/addons.html
const ReactNativeAddons = {
  // LinkedStateMixin: require('react-addons-linked-state-mixin') deprecated,
  TestModule: require('./NativeModules/TestModule'),
  TestUtils: require('react-dom/test-utils'),
  // TODO(lmr): not sure where to find this
  // batchedUpdates: require('ReactUpdates').batchedUpdates, deprecated
  // cloneWithProps: require('react-addons-clone-with-props'), deprecated
  // update: require('react-addons-update'),
};

Object.assign(ReactNative, React, { addons: ReactNativeAddons });

module.exports = ReactNative;
