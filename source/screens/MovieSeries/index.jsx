import {
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text
} from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Header, Gap } from '../../components';

// icons
import { Play } from '../../icons';



export default function MovieSeries({ navigation }) {
  function videoPlayOnPress() {
    console.log('videoPlayOnPress');
  }



  return (
    <View style={globalStyle.screen}>
      <Header left='Back' right='Account' navigation={navigation} />

      <ImageBackground source={null} style={style.video}>
        <TouchableOpacity style={style.playVideo} onPress={videoPlayOnPress} activeOpacity={0.5}>
          <Play />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView contentContainerStyle={style.main}>
        <Text style={style.textBold(18, 'center')}>Lorem ipsum dolor sit amet consectetur.</Text>
        <Gap h={10} />
        <Text style={[style.textBold(16), style.year]}>(2023)</Text>

        <Gap h={28} />
        <View style={style.scoreWrapper}>
          <View style={style.percentageWrapper}>
            <Text style={style.textBold(16)}>75%</Text>
          </View>
          <Text style={style.textBold(14)}>user score</Text>
        </View>

        <Gap h={28} />
        <View style={style.description}>
          <View style={style.lengthWrapper}>
            <Text style={[style.textBold(12), style.pg]}>PG-13</Text>
            <Text style={style.textBold(12)}>06/05/2023. 2h 8m</Text>
          </View>
          <Text style={style.textBold(12)}>Adventures, Comedy, Action</Text>
        </View>

        <Gap h={44} />
        <View style={style.synopsis}>
          <Text style={style.textBold(20)}>Synopsis</Text>
          <Text style={style.text}>Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla tristique ullamcorper eu justo eu enim lacinia. Suscipit massa viverra varius amet volutpat elementum feugiat risus morbi. Volutpat imperdiet posuere aliquam in dignissim lectus arcu aenean ut. Sit viverra tempus at ut.</Text>
        </View>
      </ScrollView>
    </View>
  );
};
