import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

class ProfileScreen extends React.Component {
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
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Picture')}
          style = {{
            fontSize: 32,
            marginRight: 15,
          }}
        >
          
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
          <Text 
          style={{
            
            color: 'black',
            fontSize: 15,
            padding: 5,
            
          }}>
            Choose Photo
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  
}


class PictureScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 35 }}>Choose a photo</Text>
        {/* This is the right button */}
        <TouchableOpacity
          style = {{
            fontSize: 20,
            marginRight:20,
            marginLeft:20,
            marginTop:10,
            padding: 1,
            backgroundColor:'#4B9CD3',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#4B9CD3',
            bottom: 317,
            right: 140,
            
          }}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Text 
          style={{
            
            color: 'white',
            fontSize: 15,
            padding: 5,
            
          }}>
            Profile
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Picture: {
      screen: PictureScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
  
  // {
    
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#4B9CD3',
  //       //carolina color
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   },
    
  // }
);
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