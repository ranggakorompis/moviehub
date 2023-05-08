import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoFont}>Moviehub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0E0E',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  logoFont: {
    fontSize: 30,
    color: '#E50914',
    fontFamily: 'Roboto-Bold',
  },
});

export default Logo;
