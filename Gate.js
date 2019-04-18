import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { SignUpScreen } from './SignUp.js'
import { ForgotScreen } from './Forgot.js'
import { SignInScreen } from './SignIn.js'
//var querystring = require("querystring");
//const axios = require('axios');
//const root_url = fetch('https://clone-applab.herokuapp.com/');



class GateScreen extends React.Component {
  // static navigationOptions = {
    
  // };



  render() {
    return (
      <View style={{}}>
        <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="Forgot Password/Username" onPress={() => this.props.navigation.navigate('Forgot')} />
      </View>
    );
  }
}

// function getUsersFromApiAsync() {
//   return fetch('https://clone-applab.herokuapp.com/users')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson)
//       return responseJson;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// getUsersFromApiAsync();






export const GateStack = createStackNavigator(
  {
    Gate: {
      screen: GateScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    Forgot: {
      screen: ForgotScreen,
    },
  },
  {
    initialRouteName: "Gate",
  },
);



  
 