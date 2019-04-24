import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, ActivityIndicator, AsyncStorage } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

const root_url = 'https://clone-applab.herokuapp.com/';

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
        <Button title="Sign out" onPress={this._signOutAsync} />
        <Button title="Delete Account" onPress={this._deleteAsync} />
      </View>
    );
  }


  _signOutAsync = async () => {

    var myInit = {
      method: 'GET',
    };

    var myRequest = new Request(root_url + 'users/logout', myInit);
      fetch(myRequest)
        .then((response) => {
          console.log(response._bodyInit)
        })

      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };

    _deleteAsync = async () => {
      AsyncStorage.getItem('userToken', (err, result) => {
        console.log(result)
        var myInit = {
          method: 'DELETE',
          body: JSON.stringify({username: result}),
        }

        var myRequest = new Request(root_url + 'users', myInit);

        fetch(myRequest)
          .then((response) => response.text())
          .then((responseJson) => {
            console.log(responseJson)

          })
      })
      
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
      

    }

    
  }