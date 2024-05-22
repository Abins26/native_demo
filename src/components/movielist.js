// import { StatusBar } from 'expo-status-bar';
// import {SafeAreaView, StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
// import disney from "../assets/disney.png";
// import { Link } from 'expo-router';
// // import { SliderBox } from "react-native-image-slider-box";
// import { useState,useEffect } from 'react'; 

// export default function Home() {
//   const [data, setData] = useState([]);
//   const getData = async () => {
//     try {
//       const resp = await fetch("https://api.sampleapis.com/movies/animation");
//       const data1 = await resp.json();
//       setData(data1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     // <SafeAreaView style={styles.safeArea}>

//     <View style={styles.container}>
//       {/* <SliderBox {movieimags}/> */}
//       <Text style={styles.text}>Welcome User Homepage </Text>
//       {/* <Image style={styles.reactlogo} source={{ uri: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v',}}/> */}

//       <Text style={styles.cardheading}>Latest Movies</Text>

//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         style={styles.cardcontainer}
//       >
//         <View style={styles.cardRow}>
//           {data.map((movies, index) => (
//             <View key={index} style={styles.cards}>
//               <Image
//                 source={{ uri: movies.posterURL }}
//                 style={styles.cardImage}
//               />
//             </View>
//           ))}
//         </View>
//         {/* <Text>Cards</Text> */}
//       </ScrollView>
//     </View>

//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   // safeArea:{
//   //   flex:1,
//   //   backgroundColor:"#fff"
//   // },
//   container: {
//     flex: 1,
//     // Color: '',
//     backgroundColor: "black",
//     height: 800,

//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },

//   text: {
//     color: "red",
//     fontSize: 25,
//     fontWeight: "800",
//   },

//   cardcontainer: {
//     paddingHorizontal: 6,
//   },

//   cardheading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     paddingHorizontal: 12,
//     color: "lightblue",
//     backgroundColor: "gray",
//   },
//   cardRow: {
//     flexDirection: "row",
//   },
//   cards: {
//     // backgroundColor:"green",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 4,
//     width: 150,
//     height: 200,
//     // overflow:"hidden"
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   // logo: {
//   // display:"flex",
//   // height: 200,
//   // width: 50,
//   // bottom:4,
//   // bottom:5

//   // },
//   reactlogo: {
//     display: "flex",
//     height: 300,
//     width: "auto",
//   },
// });


// {/* <Image style={styles.logo} source={require("../assets/disney.png" )}/> */}
// {/* <Link href="/index">Go to index page</Link> */}
// {/* <StatusBar style="auto" /> */}
// {/* <ImageBackground  source={require("../assets/disney.png")}></ImageBackground>
// <Image style={styles.logo} source={disney}/> */}




//// Test 

// import { Link } from 'expo-router';
// import { SliderBox } from "react-native-image-slider-box";

import {SafeAreaView, StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { useState,useEffect } from 'react'; 
import axios from 'axios';

export default function Movielist() {
  const [data, setData] = useState([]);
const[index,setIndex]=useState(0);
  const getData = async () => {
    try {
      const resp = await axios.get('https://api.sampleapis.com/movies/animation');
      setData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    // <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>
        {/* <Text style={styles.text}>Welcome to Homepage </Text> */}
        <Text style={styles.cardheading}>Latest Movies</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardcontainer} >
          {/* <View style={styles.cardRow}> */}
            {/* {
              data?.map((v,i)=>{
                console.log(v,"---------",i);

                return(
                  <Text style={{
                    position:'absolute',
                    height:50,
                    color:'red',
                    fontWeight:'bold'
                  }}>{String("aaaaaaaaaaaaaaaaaa",i)}</Text>
                )
              })
            } */}
                {/* <Text>{movies.id}</Text> */}
                  {/* <Image/> */}
            {data.map((movies, i) => (
              <View key={i} style={styles.cards}> 
                <Image source={{ uri: movies.posterURL }} style={styles.cardImage} />

              </View>
             ))}
         
          {/* </View> */}

        </ScrollView>
      </View>

    //  {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
// safeArea:{
// // backgroundColor:"white"
// },
  container: {
    flex: 1,
    backgroundColor:'blue',
    height:"auto",
    // Color: '',
    // alignItems: 'center',
    // justifyContent: 'center',
    width:900
  },

  text:{
    color:'white',
    fontSize:25,
    fontWeight:'500',
    // width:950
  },

  cardcontainer:{
    // paddingHorizontal:0
    backgroundColor:"gray",
    width:"auto",  //------------------------>50%
    // paddingLeft:0

  },

  cardheading:{
    fontSize:20,
    fontWeight:"semibold",
    paddingHorizontal:5,
    width:200,
    color:"white",
    backgroundColor:"skyblue"
  },
  cardRow:{
    // flexDirection:'row'
    position:"absolute"
  },
  cards:{
      // backgroundColor:"green",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      margin:4,
      width:120,
      height:160,
      // overflow:"hidden"
  },
  cardImage:{
      width:"100%",
      height:"100%",
      // resizeMode:"cover",
  },
  // logo: {
    // display:"flex",
    // height: 200,
    // width: 50,
    // bottom:4,
    // bottom:5
    
  // },
  // reactlogo: {
  //   display:"flex",
  //   height:300,
  //   width:"auto"
  // }
  
});