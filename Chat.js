import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";


export class ChatScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
// export const Chat = (props) => {
//     return (
//       <View>
         
//       </View>
//     )
//   }