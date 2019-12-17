//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Heading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Heading</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#ff7675',
    elevation: 5,
  },
  header: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 15,
    color: 'white',
  },
});

//make this component available to the app
export default Heading;
