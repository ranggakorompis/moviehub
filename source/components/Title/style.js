import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  component: {
    alignSelf: 'flex-start',
    backgroundColor: globalStyle.color.primary,
    position: 'absolute',
    paddingHorizontal: 24,
    paddingVertical: 8,
    top: 0
  },
  title: {
    color: globalStyle.color.tertiary,
    fontSize: 20,
    fontWeight: 700,
  }
});
