//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LastMember from './components/LatestMember';
import Grid from './components/Grid';
import News from './components/News'
import data from './data';

// create a component
class MyApp extends Component {
  state = {
    data: data,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
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
            <News/>
          </View>
        </ScrollView>
      </SafeAreaView>
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
