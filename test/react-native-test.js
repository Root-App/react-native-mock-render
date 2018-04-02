import { expect } from 'chai';
import { get } from 'lodash';

describe('react-native.js', () => {
  it('returns renderable types when expected', () => {
    const MockReactNative = require('../src/react-native');

    const renderableComponents = [
      'ActivityIndicator',
      'ActivityIndicatorIOS',
      'ART.LinearGradient',
      'ART.RadialGradient',
      'ART.Pattern',
      'ART.Transform',
      'ART.Path',
      'ART.Surface',
      'ART.Group',
      'ART.ClippingRectangle',
      'ART.Shape',
      'ART.Text',
      'Button',
      'DatePickerIOS',
      'DrawerLayoutAndroid',
      'FlatList',
      'Image',
      'ImageEditor',
      'ImageStore',
      'KeyboardAvoidingView',
      'ListView',
      'MapView',
      'Modal',
      'Navigator',
      'NavigatorIOS',
      'Picker',
      'Picker.Item',
      'PickerIOS',
      'ProgressBarAndroid',
      'ProgressViewIOS',
      'ScrollView',
      'SegmentedControlIOS',
      'SliderIOS',
      'SnapshotViewIOS',
      'Switch',
      'PullToRefreshViewAndroid',
      'RecyclerViewBackedScrollView',
      'RefreshControl',
      'StatusBar',
      'SwitchAndroid',
      'SwitchIOS',
      'TabBarIOS',
      'TabBarIOS.Item',
      'Text',
      'TextInput',
      'ToastAndroid',
      'ToolbarAndroid',
      'Touchable',
      'TouchableHighlight',
      'TouchableNativeFeedback',
      'TouchableOpacity',
      'TouchableWithoutFeedback',
      'View',
      'ViewPagerAndroid',
      'VirtualizedList',
      'WebView',
    ];

    renderableComponents.forEach((component) => {
      expect(get(MockReactNative, component)).to.be.a('function');
    });
  });
});
