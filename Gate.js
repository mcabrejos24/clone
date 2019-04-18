import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { SignUpScreen } from './SignUp.js'
import { ForgotScreen } from './Forgot.js'
import { SignInScreen } from './SignIn.js'
import axios from 'axios';
//var querystring = require("querystring");
//const axios = require('axios');
//const root_url = fetch('https://clone-applab.herokuapp.com/');
const root_url = 'https://clone-applab.herokuapp.com/';


class GateScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  // state = {abc: []};

  render() {
    return (
      <View>
        {/* <Button title="Sign In" onPress={something()} /> */}
        <Button title="Sign In" onPress={this._signInAsync} />
        
        {/* <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} /> */}
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="Forgot Password/Username" onPress={() => this.props.navigation.navigate('Forgot')} />
      </View>
    );
  }

  
  
  _signInAsync = async () => {
    var myInit = { 
      method: 'GET',
      //headers: myHeaders,
      mode: 'cors',
      cache: 'default' 
    };

    // let params = new URLSearchParams()
    // params.append('username', 'brandybs')
    // params.append('password', 'newpass1')
    // const url = root_url + 'users/login?' + params.toString();

    // var result = querystring.stringify({'username': "brandybs", 'password': 'newpass1'});
    // const url = root_url + 'users/login?' + result;

    const url = root_url + `users/login?dusername=${encodeURIComponent('brandybs')}&password=${encodeURIComponent('jjg')}`;



    var myRequest = new Request(url, myInit);

  

    fetch(myRequest).then(function(response) {
      console.log(response)
      // return response.blob();
    })
      // .then(function(myBlob) {
      //   var objectURL = URL.createObjectURL(myBlob);
      //   myImage.src = objectURL;
      // });



    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  


}

// function getUsersFromApiAsync() {
//   return fetch('https://clone-applab.herokuapp.com/users')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson[0].username)
//       return responseJson;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

//getUsersFromApiAsync();


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
    initialRouteName: "Gate"
  }
);



  
 