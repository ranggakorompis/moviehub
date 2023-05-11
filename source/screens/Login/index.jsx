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



export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function loginOnPress() {
    console.log(`Email = ${email} | Password = ${password}`);
    navigation.replace('Home');
  }

  function createNowOnPress() {
    navigation.push('SignUp');
  }



  return (
    <ImageBackground source={Background1} style={[globalStyle.screen, style.screen]}>
      <Title />

      <View style={globalStyle.form}>
        <Text style={globalStyle.formTitle}>Login</Text>

        <Gap h={26} />
        <Input placeholder='Enter your email' value={email} onChangeText={setEmail} />
        <Gap h={16} />
        <Input
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Gap h={30} />
        <Button label='Login' onPress={loginOnPress} />

        <Gap h={52} />
        <Text style={style.text()}>
          Don't have account?
          <Text style={style.text('bold')} onPress={createNowOnPress}> Create now</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};
