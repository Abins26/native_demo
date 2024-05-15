import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import disney from "./assets/disney";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello Abins</Text>
      <Image style={styles.logo} source={disney}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 150,
  }
});
