//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
          <LinearGradient style={styles.gradient} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)',]}>
            <Text style={styles.textBanner}>Contoh FrontEnd Design</Text>
          </LinearGradient>
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
    borderRadius: 10,
    elevation: 5,
    width: null,
    height: 220,
    resizeMode: 'contain',
  },

  textBanner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex:1,
    alignSelf:'flex-end',
    marginBottom: 10,
  },

  gradient:{
      position:'absolute',
      left:0,
      right:0,
      bottom:0,
      top:0,
      borderRadius:10,
      flexDirection:'row'

  }
});

//make this component available to the app
export default Hero;
