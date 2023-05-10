import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {getSeriesList} from '../../API/TheMovieAPI';

const SeriesCard = () => {
  const [popularSeries, setpopularSeries] = useState([]);

  useEffect(() => {
    getSeriesList().then(result => {
      setpopularSeries(result);
    });
  }, []);

  const Card = () => {
    return popularSeries.map((series, i) => {
      const title = series.name;
      const releaseDate = series.first_air_date;
      const releaseYear = releaseDate.substr(0, 4);
      return (
        <View key={i} style={styles.cardContainer}>
          <Image
            style={{width: 130, height: 170, borderRadius: 5}}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
            }}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.releaseYear}>{releaseYear}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cardContainer: {
    width: 130,
  },
  title: {
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

export default SeriesCard;
