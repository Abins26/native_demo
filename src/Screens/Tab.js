// import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './Screens/homescreen';
// import SearchScreen from './Screens/search';
// import Icon from 'react-native-vector-icons/Ionicons';
// // import linking from '../Navigation/linking';

// const Tab = createBottomTabNavigator();

// function Tabs() {
//   return (
//     <NavigationContainer >
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home-outline';
//             } else if (route.name === 'Search') {
//               iconName = 'search-outline';
//             }
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//         >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Search" component={SearchScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Tabs;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/homescreen';
import SearchScreen from './Screens/search';
import Icon from 'react-native-vector-icons/Ionicons';
// import linking from '../Navigation/linking';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer /* linking={linking} */>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;
