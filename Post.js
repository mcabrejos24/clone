import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

export class PostScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=3`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Posts Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }