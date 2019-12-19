//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import data from '../data';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class Grid extends Component {
  state = {
    data: data,
  };

  gridLayout = () => {
    return this.state.data.map(singleData => {
      return (
        <View style={styles.Main} key={singleData.id}>
          <ImageBackground
          imageStyle={{borderRadius:20}}
            source={{uri: singleData.image_link}}
            style={styles.imgLink}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0.1, y: 0.6}}
              end={{x: 0.1, y: 1}}
              colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>
              <Text style={styles.captionGrid}>{singleData.headline}</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      );
    });
  };

  render() {
    return <View style={styles.container}>{this.gridLayout()}</View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 800,
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Main: {
    height: 250,
    margin: 3,
    flexBasis: '48%',
  },

  imgLink: {
    borderRadius:20,
    height: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  captionGrid: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 15,
    color: '#fff',
    alignSelf:'flex-end',
    paddingBottom:5,
  },

  gradient: {
    height: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection:'row',
    borderRadius:20,
  },
});

//make this component available to the app
export default Grid;
