import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

export class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

//   static navigationOptions = {
//     drawerIcon: () => (
//       <Image
//         source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=3`}}
//         style={{width: 30, height: 30, borderRadius: 15}}
//       />
//     )
//   }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center",  }}>
          <Text>SignIn Screen</Text>
          
        <TextInput
            {...this.props} // 
            editable = {true}
            maxLength = {40}
            placeholder='Username here...'
            onChangeText={(userText) => this.setState({userText})}
            value={this.state.userText}
            style={{ 
                
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                borderColor: 'black', 
                borderWidth: 1,
                width: 300,
                height: 50,
            }}
        />

        <TextInput
            {...this.props} // 
            editable = {true}
            maxLength = {40}
            placeholder='Password here...'
            onChangeText={(passText) => this.setState({passText})}
            value={this.state.passText}
            style={{ 
                
                alignItems: "center",
                borderColor: 'black', 
                borderWidth: 1,
                width: 300,
                height: 50,
            }}
        />





          <Button
            title="Go to Home"
            onPress={() => alert(this.state.passText)}
          />
        </View>
      );
    }
  }