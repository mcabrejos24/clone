import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';

export class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
      
    };
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }
  
