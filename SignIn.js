import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
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
                fontSize: 30
            }}
        />

        <TextInput
            {...this.props} // 
            editable = {true}
            maxLength = {40}
            placeholder='Password here...'
            inlineImageLeft='search_icon'
            onChangeText={(passText) => this.setState({passText})}
            value={this.state.passText}
            style={{ 
                
                alignItems: "center",
                borderColor: 'black', 
                borderWidth: 1,
                width: 300,
                height: 50,
                fontSize: 30
            }}
        />



      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text 
          style={styles.button}>Sign In
          </Text>
      </TouchableOpacity>


      <Button
            title= "Cancel"
            onPress={() => this.props.navigation.navigate('Gate')}
          />

          <Button
            title="Go to Home"
            onPress={() => alert(this.state.passText)}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      backgroundColor: '#4B9CD3',
      borderColor: 'white',
      borderWidth: 1,
      color: 'white',
      fontSize: 20,
      overflow: 'hidden',
      padding: 12,
      width: 300,
      textAlign:'center',
    }
  })