import { TouchableOpacity, Text } from 'react-native';

// styles
import style from './style'; // local



export default function Button({ label='<button label>', onPress=() => console.log('<button onPress>') }) {
  return (
    <TouchableOpacity style={style.component} onPress={onPress} activeOpacity={0.5}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};
