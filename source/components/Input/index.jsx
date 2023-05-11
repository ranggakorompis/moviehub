import { TextInput } from 'react-native';

// styles
import style from './style'; // local



export default function Input({
  placeholder='<input placeholder>',
  type='default',
  value,
  onChangeText=() => console.log('<input onChangeText>'),
  secureTextEntry=false
}) {
  return (
    <TextInput
      style={style.component}
      placeholder={placeholder}
      placeholderTextColor='#FFFFFF'
      keyboardType={type}
      value={value}
      onChangeText={value => onChangeText(value)}
      secureTextEntry={secureTextEntry}
    />
  );
};
