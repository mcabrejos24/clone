import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Profile... again"
          onPress={() => this.props.navigation.push('Profile')}
        />
         <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

// export const Profile = (props) => {
//     return (
//       <View>
//         <Text> 
//           profile
//         </Text>
//           <Photo />
//           <RealName />
//           <Username />
//           <YourPosts />
//           <Settings />
//       </View>
//     )
//   }
  
//   const Photo = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
  
//   const RealName = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const Username = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const YourPosts = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const Settings = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }