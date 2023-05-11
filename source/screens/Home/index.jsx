import { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  ScrollView
} from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Header, Gap, CardList } from '../../components';

// images
import { Background2 } from '../../images';

// icons
import { Search } from '../../icons';

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



export default function Home({ navigation }) {
  const [search, setSearch] = useState('');



  return (
    <View style={globalStyle.screen}>
      <Header left='Title' right='Account' navigation={navigation} />

      <ImageBackground source={Background2} style={style.welcome}>
        <Gap h={18} />
        <Text style={style.welcomeTitle()}>
          Welcome to
          <Text style={style.welcomeTitle('#E50914')}> Moviehub</Text>
        </Text>
        <Text style={style.welcomeText}>Millions of movies, TV shows and people to discover. Explore now.</Text>

        <Gap h={18} />
        <View style={style.search}>
          <TextInput
            style={style.searchInput}
            placeholder='search..'
            placeholderTextColor='#000000'
            value={search}
            onChangeText={value => setSearch(value)}
          />
          <Search />
        </View>
      </ImageBackground>

      <ScrollView style={style.main}>
        <CardList title='Movies' list={movies} navigation={navigation} />
        <Gap h={20} />
        <CardList title='Series' list={series} navigation={navigation} />
      </ScrollView>
    </View>
  );
};
