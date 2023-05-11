import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  video: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    height: 245,
    justifyContent: 'center'
  },
  playVideo: {
    backgroundColor: globalStyle.color.secondary,
    borderRadius: 48,
    padding: 24
  },

  main: {
    backgroundColor: globalStyle.color.primary,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 20
  },
  scoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentageWrapper: {
    alignItems: 'center',
    borderColor: '#22F300',
    borderRadius: 48,
    borderWidth: 2,
    height: 48,
    justifyContent: 'center',
    marginRight: 8,
    width: 48
  },
  lengthWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pg: {
    borderColor: '#D9D9D980',
    borderWidth: 2,
    marginRight: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    textAlign: 'center',
    verticalAlign: 'middle'
  },

  textBold: (size, align='left') => ({
    textAlign: align,
    color: '#FFFFFF',
    fontSize: size,
    fontWeight: '700'
  }),
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400'
  },
  year: {
    opacity: 0.8
  }
});
