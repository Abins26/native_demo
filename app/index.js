import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from './components/movielist';
import Navbar from './components/Navbar';
import Moviecard from './components/moviecard';
import CarouselComponent from './components/carosuel';
import Movielist from './components/movielist';

export default function index() {
  return (
    <View>
      <CarouselComponent />
      <Movielist/>
      {/* <Moviecard/> */}
      {/* <Navbar/> */}
    </View>
  );
}

const styles = StyleSheet.create({})