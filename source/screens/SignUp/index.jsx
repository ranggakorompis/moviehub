import { useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import {
  Title,
  Gap,
  Input,
  Button
} from '../../components';

// images
import { Background1 } from '../../images';



export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function SignupOnPress() {
    console.log(`Name = ${name} | UserId = ${userId} | Email = ${email} | Password = ${password}`);
    navigation.replace('Home');
  }



  return (
    <ImageBackground source={Background1} style={[globalStyle.screen, style.screen]}>
      <Title />

      <View style={globalStyle.form}>
        <Text style={globalStyle.formTitle}>Sign Up</Text>

        <Gap h={26} />
        <Input placeholder='Enter your name' value={name} onChangeText={setName} />
        <Gap h={16} />
        <Input
          placeholder='Enter your userid'
          type='numeric'
          value={userId}
          onChangeText={setUserId}
        />
        <Gap h={16} />
        <Input
          placeholder='Enter your email'
          type='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <Gap h={16} />
        <Input
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Gap h={30} />
        <Button label='Signup' onPress={SignupOnPress} />
      </View>
    </ImageBackground>
  );
};
