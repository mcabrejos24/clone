import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { SignUpScreen } from './SignUp.js'
import { ForgotScreen } from './Forgot.js'

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign In" onPress={this._signInAsync} />
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="Forgot Password/Username" onPress={() => this.props.navigation.navigate('Forgot')} />
      </View>
    );
  }
  
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export const SignStack = createStackNavigator(
  {
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



  
 