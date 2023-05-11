import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  screen: {
    justifyContent: 'center'
  },
  text: bold => ({
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: (bold) && 'bold'
  })
});
