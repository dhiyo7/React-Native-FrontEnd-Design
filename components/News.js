//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import data from '../data'

// create a component
class News extends Component {

    state={
        data:data
    }

  render() {
    return (
      <View style={styles.container}>
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
                <Text style={styles.bar}>{item.type}</Text>
                <Text style={styles.headline}>{item.headline}</Text>

                <View style={styles.avanCapt}>
                  <Image
                    style={styles.imgAvatar}
                    source={{uri: item.user_avatar}}
                  />
                  <Text style={styles.username}>{item.username}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},

  tittleGrid: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
  },

  news: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 1,
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
    width: Dimensions.get('window').width / 3 - 4,
  },

  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    borderRadius: 10,
  },

  sideContent: {
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 8,
  },

  imgAvatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },

  bar: {
    width: 90,
    backgroundColor: '#7bed9f',
    textAlign: 'center',
    borderRadius: 6,
    paddingVertical: 2,
  },

  headline: {
    fontSize: 14.5,
    fontWeight: 'bold',
    paddingRight: 7,
    alignContent: 'stretch',
  },

  avanCapt: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
  },

  username: {
    paddingLeft: 10,
  },
});

//make this component available to the app
export default News;
