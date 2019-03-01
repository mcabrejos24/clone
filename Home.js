import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FontAwesomeIcon icon={ faCoffee } />
        <Text>Home Screen</Text>
        <Button
          icon={{
            name: "arrow-right",
            size: 15,
            color: "white"
          }}
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
        <Button
          title="Go to Notifications"
          onPress={() => this.props.navigation.navigate('Notifications')}
        />
      </View>
    );
  }
}

// export const Home = (props) => {
//     return (
//       <View>
//           <Profile />
//           <NewStatus />
//           <Posts />
//           <Navbar />
//       </View>
//     )
//   }


//   const NewStatus = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  
//   const Posts = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  
//   const Navbar = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  

//     const newStatStyle = StyleSheet.create({
//     container: {
//       backgroundColor: 'green',
//       display: 'flex',
//       justifyContent: 'flex-start',
      
//     },
//   }); 
