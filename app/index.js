import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './home'
import Navbar from './components/Navbar'

export default function index() {
  return (
    <View>
<Home/>
<Navbar/>
    </View>
  )
}

const styles = StyleSheet.create({})