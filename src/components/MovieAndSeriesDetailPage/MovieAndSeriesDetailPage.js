import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MovieAndSeriesDetailPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountPage')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/user.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{width: '100%', height: 250}}
        source={require('../../../assets/img/fight-club.jpg')}
      />
      <Text style={styles.title}>Fight Club</Text>
      <Text style={styles.subTitle}>(2020)</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
            }}>
            75%
          </Text>
        </View>
        <Text
          style={{fontSize: 16, fontFamily: 'Roboto-Medium', color: 'white'}}>
          user score
        </Text>
      </View>
      <View style={styles.genre}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#D9D9D9',
              width: 50,
            }}>
            <Text style={{color: 'white', alignSelf: 'center'}}>PG-13</Text>
          </View>
          <Text style={{color: 'white'}}>06/05/2023. 2h 8m</Text>
        </View>
        <Text style={{color: 'white'}}>Drama, Thriller, Comedy</Text>
      </View>
      <View style={styles.synopsis}>
        <Text style={{fontSize: 24, fontFamily: 'Roboto-Bold', color: 'white'}}>
          Synopsis
        </Text>
        <Text style={{fontSize: 16, color: 'white'}}>
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground \"fight clubs\" forming in every
          town, until an eccentric gets in the way and ignites an out-of-control
          spiral toward oblivion.
        </Text>
      </View>
    </View>
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
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: 'white',
    opacity: 0.8,
    alignSelf: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  rating: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
  },
  genre: {
    alignItems: 'center',
    marginTop: 20,
  },
  synopsis: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 5,
  },
});

export default MovieAndSeriesDetailPage;
