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
} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LastMember from './components/LatestMember';
import Grid from './components/Grid';
import data from './data';

// create a component
class MyApp extends Component {
  state = {
    data: data,
  };

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
          <Text style={styles.news}>News</Text>
          <FlatList
            style={styles.list}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.rowStyles}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: item.image_link}} />
                </View>
                <View style={styles.sideContent}>
                  <Text>{item.headline}</Text>
                </View>
              </View>
            )}
          />
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

  news: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    paddingLeft: 10,
  },

  list: {
    width: '100%',
  },

  rowStyles: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#a4b0be',
    padding: 5,
    margin: 5,
  },

  imageContainer: {
    height: 120,
    width: (Dimensions.get('window').width / 3) - 4
  },

  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    borderRadius: 10,
  },

  sideContent:{
    width: (Dimensions.get('window').width /1.5) ,

  }
});

//make this component available to the app
export default MyApp;
