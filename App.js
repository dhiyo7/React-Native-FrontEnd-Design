//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LastMember from './components/LatestMember';
import Grid from './components/Grid';

// create a component
class MyApp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.part1}>
            <Heading />
            <Hero />
            <LastMember />
          </View>

          <View>
            <Text style={styles.tittleGrid}>Monday</Text>
          </View>
          <Grid />
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },

  tittleGrid: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
  },
});

//make this component available to the app
export default MyApp;
