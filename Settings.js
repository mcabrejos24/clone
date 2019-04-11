import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, ActivityIndicator, AsyncStorage } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

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
        </View>
      );
    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
    
  }