import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  component: {
    alignItems: 'center',
    backgroundColor: globalStyle.color.primary,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'space-between',
    paddingHorizontal: 14
  },
  title: {
    color: globalStyle.color.tertiary,
    fontSize: 20,
    fontWeight: 700
  }
});
