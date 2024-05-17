import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View ,Image, ImageBackground} from 'react-native';
import disney from "../assets/disney.png";
import { Link } from 'expo-router';
export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Welcome Home User</Text>
      <Image style={styles.reactlogo} source={{ uri: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v',}}/>

      {/* <Image style={styles.logo} source={require("../assets/disney.png" )}/> */}

      {/* <Link href="/index">Go to index page</Link> */}
      {/* <StatusBar style="auto" /> */}
      {/* <ImageBackground  source={require("../assets/disney.png")}></ImageBackground>
      <Image style={styles.logo} source={disney}/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Color: '',
    backgroundColor:'black',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:25,
    fontWeight:'800',
  },
  logo: {
    display:"flex",
    height: 200,
    width: 150,
    bottom:4,
    // bottom:5

  },
  reactlogo: {
    display:"flex-column",
    height:500,
    width:700
  }

});
