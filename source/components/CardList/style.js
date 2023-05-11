import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  title: size => ({
    borderLeftWidth: 4,
    borderLeftColor: globalStyle.color.tertiary,
    color: '#FFFFFF',
    fontSize: (size === 'big') ? 26 : 16,
    fontWeight: '700',
    paddingLeft: 8
  }),
  
  scrollView: {
    marginTop: 18
  },
  item: last => ({
    marginRight: (!last) ? 18 : 0
  }),
  itemImage: {
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    height: 170,
    width: 130
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4
  },
  itemYear: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    opacity: 0.8
  }
});
