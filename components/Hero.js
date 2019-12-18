//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

// create a component
class Hero extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageHero}
          source={{
            uri:
              'https://cdn.dribbble.com/users/2552597/screenshots/6780614/pinguin.png',
          }}>
          <Text>Hero</Text>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},

  imageHero: {
    marginTop: 10,
    borderRadius: 5,
    elevation: 8,
    width: null,
    height: 180,
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default Hero;
