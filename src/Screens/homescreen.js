import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselComponent from '../../app/components/carosuel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CarouselComponent/>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
