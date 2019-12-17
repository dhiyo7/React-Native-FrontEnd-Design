//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './components/Heading'

// create a component
class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading/>
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
