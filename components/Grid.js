//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import data from '../data';

// create a component
class Grid extends Component {
  state = {
    data: data,
  };

  gridLayout = () => {
    return this.state.data.map(singleData => {
      return (
        <View key={singleData.id}>
          <ImageBackground
            source={{uri: singleData.image_link}}
            style={styles.imgLink}>
            <Text>{singleData.headline}</Text>
          </ImageBackground>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
          {this.gridLayout()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},

  imgLink: {
    height: 200,
  },
});

//make this component available to the app
export default Grid;
