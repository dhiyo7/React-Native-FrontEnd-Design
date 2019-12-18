//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import data from '../data'

// create a component
class LastMember extends Component {

    state={
        data:data
    }

    latestMembers = () =>{
        return this.state.data.map(singleData =>{
            return(
                <View>
                    <Text>
                        {singleData.username}
                    </Text>
                </View>
            )
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>LastMember</Text>
        <View>
            {this.latestMembers()}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},

  titleText:{
      fontSize:22,
      paddingTop:10,
  }
});

//make this component available to the app
export default LastMember;
