import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../Logo/Logo';
import {useEffect, useState} from 'react';
import {
  searchMovieAndSeries,
  getMovieList,
  getSeriesList,
} from '../../API/TheMovieAPI';

const HomePage = ({navigation}) => {
  const [inputValue, setInputValue] = useState([]);

  const search = async q => {
    setInputValue(q);
    const query = await searchMovieAndSeries(q);
    setPopularMovies(query.results);
    setPopularSeries(query.results);
  };

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then(result => {
      setPopularMovies(result);
    });
  }, []);

  const MovieCard = () => {
    return popularMovies.map((movie, i) => {
      const title = movie.title;
      const releaseDate = movie.release_date;
      const movieId = movie.id;
      return (
        <TouchableOpacity onPress={() => handleOnPress(movieId)}>
          <View key={i} style={styles.cardContainer}>
            <Image
              style={{width: 130, height: 170, borderRadius: 5}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
            />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.releaseYear}>{releaseDate}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    getSeriesList().then(result => {
      setPopularSeries(result);
    });
  }, []);

  const SeriesCard = () => {
    return popularSeries.map((series, i) => {
      const title = series.name;
      const releaseDate = series.first_air_date;
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('MovieAndSeriesDetailPage')}>
          <View key={i} style={styles.cardContainer}>
            <Image
              style={{width: 130, height: 170, borderRadius: 5}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
              }}
            />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.releaseYear}>{releaseDate}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const handleOnPress = id => {
    navigation.navigate('MovieAndSeriesDetailPage', {movieId: id});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Logo />
        <TouchableOpacity onPress={() => navigation.navigate('AccountPage')}>
          <Image
            style={styles.userIcon}
            source={require('../../../assets/icons/user.png')}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.heroImg}
        source={require('../../../assets/bg/movies-bg.jpg')}>
        <Text style={styles.title}>
          Welcome to <Text style={{color: '#E50914'}}>Moviehub</Text>
        </Text>
        <Text style={styles.subTitle}>
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
        <TextInput
          style={styles.searchButton}
          placeholder="search..."
          onChangeText={search}
        />
      </ImageBackground>
      <View style={styles.mainContent}>
        <View style={styles.movies}>
          <Text style={styles.subSubTitle}>Movies</Text>
          <View style={styles.cards}>
            <MovieCard />
          </View>
        </View>
        <View style={[styles.series, {marginTop: 20}]}>
          <Text style={styles.subSubTitle}>Series</Text>
          <View style={styles.cards}>
            <SeriesCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0E0E',
    height: '100%',
  },
  navbar: {
    backgroundColor: '#0F0E0E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  heroImg: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  mainContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  subSubTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    borderLeftWidth: 4,
    borderLeftColor: '#E50914',
    paddingLeft: 7,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'white',
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 5,
  },
  cards: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cardContainer: {
    width: 130,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  releaseYear: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    opacity: 0.8,
  },
});

export default HomePage;
