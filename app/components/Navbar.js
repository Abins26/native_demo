import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

function Navbar() {
  
  return (

<View style={styles.container}>
    <Text style={styles.text1}>Home Navbar</Text>
</View>
);
}

export default Navbar

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // Color: '',
      // backgroundColor:'darkblue',
      alignItems: 'left',
      // justifyContent: 'center',
    },
    text1:{
      color:'orange',
      fontSize:25,
      fontWeight:'800',
    },
  
  });
  