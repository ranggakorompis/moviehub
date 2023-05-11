import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  component: {
    backgroundColor: globalStyle.color.tertiary,
    borderRadius: 4,
    paddingVertical: 16
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center'
  }
});
