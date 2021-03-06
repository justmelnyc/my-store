import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  tabBar: {
    height: metrics.tabBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',

    borderColor: colors.morning,
    borderTopWidth: 1,
  },
});

export default styles;
