import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Svg } from 'expo'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createAppContainer } from "react-navigation";

import { HomeScreen } from './Home.js'
import { ProfileScreen } from './Profile.js'
import { SearchScreen } from './Search.js'
import { ChatScreen } from './Chat.js'
import { NotificationsScreen } from './Notifications.js'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Search: SearchScreen,
    Chat: ChatScreen,
    Notifications: NotificationsScreen
  },
  {
    initialRouteName: "Home"
  }
);
//export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



// export default class App extends React.Component {
//   render() {
//     const style = {
//       backgroundColor: 'lightblue',
//       flex: 1,
//       //alignItems: 'center',
//     }
//     return (
//       <SafeAreaView style={style}>
//         <FontAwesomeIcon icon={ faCoffee } />
 
//         <Home />
//         <Search />
//         <Chat />
//         <Notifications />
//       </SafeAreaView>
//     )
//   }
// }



















// const Row = (props) => {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       <Square />
//       <Square />
//       <Square />
//     </View>
//   )
// }

// const Square = (props) => {
//   const style = {
//     width: 100,
//     height: 100,
//     borderColor: 'black',
//     borderWidth: 1,
//     justifyContent: 'center',
//   }

//   return (
//     <View style={style}>
//       <Text style={{textAlign: 'center'}}>This is a Square.</Text>
//     </View>
//   )
// }