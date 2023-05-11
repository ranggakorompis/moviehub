import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  welcome: {
    paddingBottom: 36
  },
  welcomeTitle: color => ({
    color: (color) ? color : '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 12
  }),
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 12,
    marginRight: 50
  },
  search: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 18
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700'
  },

  main: {
    backgroundColor: globalStyle.color.primary,
    paddingHorizontal: 12,
    paddingVertical: 18,
  }
});
