import { View, Text } from 'react-native';

// styles
import style from './style'; // local



export default function Title() {
  return (
    <View style={style.component}>
      <Text style={style.title}>Moviehub</Text>
    </View>
  );
};
