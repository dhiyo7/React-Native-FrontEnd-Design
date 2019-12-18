//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import data from '../data';

// create a component
class LastMember extends Component {
  state = {
    data: data,
  };

  latestMembers = () => {
    return this.state.data.map(singleData => {
      return (
        <View key={singleData.id} style={styles.scrollData}>
          <Image
            source={{uri: singleData.user_avatar}}
            style={styles.avatar}></Image>
          <Text>{singleData.username}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View>
        <View>
          <Text style={styles.titleText}>LastMember</Text>
        </View>

        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.latestMembers()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#a4b0be',
    marginVertical: 5,
    borderRadius: 8,
  },

  titleText: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal:13
  },

  scrollData: {
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
  },
});

//make this component available to the app
export default LastMember;
