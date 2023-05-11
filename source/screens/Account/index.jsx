import { View, Text, ScrollView } from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Header, Gap, CardList } from '../../components';

// icons
import { PersonBg } from '../../icons';

// dummy data
const movies = [
  {title: 'Lorem ipsum', year: 2023},
  {title: 'Dolor Sit', year: 2023},
  {title: 'Amet Consectetur', year: 2022},
  {title: 'Adipiscing', year: 2022},
  {title: 'Elit', year: 2021}
];

const series = [
  {title: 'Lorem', year: 2020},
  {title: 'Ipsum', year: 2019},
  {title: 'Dolor', year: 2018},
  {title: 'Sit', year: 2017},
  {title: 'Amet', year: 2016}
];



export default function Account({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Header left='Back' right='Exit' navigation={navigation} />

      <Gap h={18} />
      <View style={style.person}>
        <PersonBg />
        <Text style={style.name}>Rangga Korompis</Text>
      </View>

      <Gap h={76} />
      <ScrollView style={style.main}>
        <CardList
          title='Watchlist'
          titleSize='big'
          list={series}
        />
        <Gap h={24} />
        <CardList list={movies} />
      </ScrollView>
    </View>
  );
};
