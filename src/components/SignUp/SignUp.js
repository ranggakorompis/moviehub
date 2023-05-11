import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../Logo/Logo';

const SignUp = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/bg/movies-bg.jpg')}
        style={styles.movieBackground}>
        <Logo />
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputFields}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your name"
                placeholderTextColor={'#E8E8E8'}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your userid"
                placeholderTextColor={'#E8E8E8'}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor={'#E8E8E8'}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your password"
                placeholderTextColor={'#E8E8E8'}
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingTop: 90,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(15,14,14,0.9)',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'rgba(255,255,255,0.8)',
  },
  inputFields: {
    paddingTop: 25,
  },
  inputField: {
    width: '100%',
    height: 55,
    backgroundColor: '#333333',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#E8E8E8',
    marginVertical: 7,
  },
  buttonContainer: {
    width: '100%',
    height: 55,
    backgroundColor: '#E50914',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
});

export default SignUp;
