import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Svg } from 'expo'
import { Home } from './Home.js'
import { Search } from './Search.js'
import { Chat } from './Chat.js'
import { Notifications } from './Notifications.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'








export default class App extends React.Component {
  render() {
    const style = {
      backgroundColor: 'lightblue',
      flex: 1,
      //alignItems: 'center',
    }
    return (
      <SafeAreaView style={style}>
        <FontAwesomeIcon icon={ faCoffee } />
 
        <Home />
        <Search />
        <Chat />
        <Notifications />
      </SafeAreaView>
    )
  }
}



















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