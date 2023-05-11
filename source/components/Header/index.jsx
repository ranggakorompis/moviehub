import { View, TouchableOpacity, BackHandler, Text } from 'react-native';

// styles
import style from './style'; // local

// icons
import { ArrowLeft, PersonSm, Exit } from '../../icons';



const Component = ({ componentName, navigation }) => {
  function backOnPress() {
    navigation.pop();
  }

  function accountOnPress() {
    navigation.push('Account');
  }

  function exitOnPress() {
    BackHandler.exitApp();
  }



  if(componentName === null) return <View />

  if(componentName === 'Title') {
    return (
      <Text style={style.title}>Moviehub</Text>
    );
  }

  if(componentName === 'Back') {
    return (
      <TouchableOpacity onPress={backOnPress} activeOpacity={0.5}>
        <ArrowLeft />
      </TouchableOpacity>
    )
  }

  if(componentName === 'Account') {
    return (
      <TouchableOpacity onPress={accountOnPress} activeOpacity={0.5}>
        <PersonSm />
      </TouchableOpacity>
    )
  }

  if(componentName === 'Exit') {
    return (
      <TouchableOpacity onPress={exitOnPress} activeOpacity={0.5}>
        <Exit />
      </TouchableOpacity>
    )
  }
};



export default function Header({ left=null, right=null, navigation }) {
  return (
    <View style={style.component}>
      <Component componentName={left} navigation={navigation} />
      <Component componentName={right} navigation={navigation} />
    </View>
  );
};
