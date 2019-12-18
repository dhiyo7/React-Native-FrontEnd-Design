//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './components/Heading'
import Hero from './components/Hero'
import LastMember from './components/LatestMember'

// create a component
class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <Hero/>
        <LastMember/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});

//make this component available to the app
export default MyApp;
