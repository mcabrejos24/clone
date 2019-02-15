import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'




export default class App extends React.Component {
  render() {
    const style = {
      backgroundColor: 'lightblue',
      flex: 1,
      //alignItems: 'center',
    }
    return (
      <SafeAreaView style={style}>
        <ProfileBtn />
        <NewStatus />
        <Posts />
        <Navbar />
      </SafeAreaView>
    )
  }
}



const ProfileBtn = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <Text> 
        Profile

      </Text>
    </View>
  )
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

const NewStatus = (props) => {
  return (
    <View style={newStatStyle.container}>
      <Text>+</Text>
    </View>
  )
}

const Posts = (props) => {
  return (
    <View style={newStatStyle.container}>
      <Text>+</Text>
    </View>
  )
}

const Navbar = (props) => {
  return (
    <View style={newStatStyle.container}>
      <Text>+</Text>
    </View>
  )
}

const newStatStyle = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'flex-start',
    
  },
});
