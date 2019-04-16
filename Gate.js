import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { SignUpScreen } from './SignUp.js'
import { ForgotScreen } from './Forgot.js'
import { SignInScreen } from './SignIn.js'

const root_url = fetch('https://clone-applab.herokuapp.com/users');

class GateScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        {/* <Button title="Sign In" onPress={this._signInAsync} /> */}
        <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="Forgot Password/Username" onPress={() => this.props.navigation.navigate('Forgot')} />
      </View>
    );
  }
  
  _signInAsync = async () => {
    root_url
      // .then((response) => response.json())
      // .then((responseJson) => {
        


      // })






    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

function getUsersFromApiAsync() {
  return fetch('https://clone-applab.herokuapp.com/users')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson[0].username)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

getUsersFromApiAsync();


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
    initialRouteName: "SignIn"
  }
);



  
 