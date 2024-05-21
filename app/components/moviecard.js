// import { View, SliderBox,Text,FlatList, SafeAreaView } from 'react-native'
// import React from 'react'
// // import { SliderBox } from "react-native-image-slider-box";
// import Carousel from 'react-native-snap-carousel';

// const MovieImages = [
//     {id:1,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9792/1714983119792-v",},
//     {id:2,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8206/1715547198206-v",},
//     {id:3,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v",},
//     {id:4,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/360/1714634700360-v",},
//     {id:5,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8095/1715162408095-v",},
//     {id:6,url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3108/1715106463108-v",}
//     ];
// const MyCarousel=({data})=>{
//     const renderItem = ({item}) => (
//         <View style={styles.card}>
//              <Image source={{ uri: item.url }} style={styles.image} />
//              <Text style={styles.text}>{`ID: ${item.id}`}</Text>
//         </View>
//             )

// return(
//     <Carousel 
//     data={data}
//     renderItem={renderItem}
//     sliderWidth={300}
//     itemWidth={250}
//     layout={"default"}
//     />
// )
// }

// export default function Moviecard() {
//   return (
//     <View style={styles.container}>
//     <Text style={styles.header}>Movies Carousel</Text>
//     <MyCarousel data={MovieImages} />
//     </View>

    
// )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//     },
//     header: {
//         fontSize: 24,
//         marginVertical: 10,
//         fontWeight: 'bold',
//     },
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         height: 250,
//         padding: 10,
//         marginLeft: 25,
//         marginRight: 25,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         width: 200,
//         height: 150,
//         borderRadius: 8,
//     },
//     text: {
//         marginTop: 10,
//         fontSize: 16,
//     },
// });


{/* <SafeAreaView>
<FlatList>
</FlatList>
</SafeAreaView> */}


// <View >
    //         <Image source={ MovieImages.url} />
    //     <Text>dskd</Text>
    // </View>
  
    // <View>
    //   <Text>moviecard</Text>
    //      {MovieImages.map((image,index)=>(
    //     <View key={index} style={styles.cards}>
    //   <Image source={{uri:image}} style={styles.cardImage} />
    //         </View>      
    //         ))}
    // </View>
      
  
// const styles = StyleSheet.create({
  
    // container: {
    //   flex: 1,
      // Color: '',
      // backgroundColor:'black',
    //   paddingBottom:350,
      // alignItems: 'center',
      // justifyContent: 'center',
    // },
  
//     text:{
//       color:'white',
//       fontSize:25,
//       fontWeight:'800',
//     },
  
//     cardcontainer:{
//       paddingHorizontal:6
//     },
  
//     cardheading:{
//       fontSize:24,
//       fontWeight:"bold",
//       paddingHorizontal:12,
//       color:"lightblue",
//       backgroundColor:"gray"
//     },
//     cardRow:{
//       flexDirection:'row'
//     },
//     cards:{
//         // backgroundColor:"green",
//         alignItems:"center",
//         justifyContent:"center",
//         margin:4,
//         width:150,
//         height:200,
  
//     },
//     cardImage:{
//         width:"100%",
//         height:"100%",
//         resizeMode:"cover",
//     },
  
//   });
  
