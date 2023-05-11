import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';
import {getMovieList} from '../../API/TheMovieAPI';

const AccountPage = ({navigation}) => {
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

  const handleOnPress = id => {
    navigation.navigate('MovieAndSeriesDetailPage', {movieId: id});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/logout.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.userIcon}
          source={require('../../../assets/icons/user.png')}
        />
        <Text style={{fontSize: 30, fontFamily: 'Roboto-Bold', color: 'white'}}>
          Rangga Korompis
        </Text>
      </View>
      <Text style={styles.watchlist}>Watchlist</Text>
      <View style={styles.cards}>
        <MovieCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0E0E',
    width: '100%',
    height: '100%',
  },
  navbar: {
    backgroundColor: '#0F0E0E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  userIcon: {
    width: 180,
    height: 180,
  },
  watchlist: {
    borderLeftWidth: 4,
    borderColor: '#E50914',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: 'white',
    paddingLeft: 7,
    marginTop: 45,
  },
  cards: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 15,
    marginBottom: 15,
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

export default AccountPage;
