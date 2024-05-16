import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import disney from "./assets/disney.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome User</Text>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./assets/disney.png" )}/>
      <Image style={styles.logo} source={disney}/>
      {/* <Image style={styles.reactlogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    fontSize:25,
    fontWeight:'800'
  },
  logo: {
    display:"flex",
    height: 200,
    width: 150,
  },
  reactlogo: {

    height:200,
    width:2
  }

});
