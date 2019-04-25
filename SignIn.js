import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { FormLabel, FormValidationMessage} from 'react-native-elements'

const root_url = 'https://clone-applab.herokuapp.com/';

export class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userText : '',
          passText : '',
        };
      }
    render() {
      return (

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{marginTop: 100}}>SignIn Screen</Text>
          
        <TextInput
            {...this.props} // 
            editable = {true}
            maxLength = {40}
            placeholder='Username here...'
            onChangeText={(userText) => this.setState({userText})}
            value={this.state.userText}
            autoCapitalize = 'none'
            style={{ 
                
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                borderColor: 'grey', 
                borderWidth: 1,
                width: 300,
                height: 50,
                fontSize: 20,
                padding: 10,
                borderRadius: 25
            }}
        />

        <TextInput
            {...this.props} // 
            editable = {true}
            maxLength = {40}
            placeholder='Password here...'
            onChangeText={(passText) => this.setState({passText})}
            value={this.state.passText}
            autoCapitalize = 'none'
            style={{ 
                
                alignItems: "center",
                borderColor: 'grey', 
               borderWidth: 1,
                width: 300,
                height: 50,
                fontSize: 20,
                padding: 10,
                borderRadius: 25
            }}
        />


{/* <FormLabel>Name</FormLabel>


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
                borderColor: 'grey', 
               borderWidth: 1,
               
                width: 300,
                height: 50,
                fontSize: 20
            }}
        /> 


<FormValidationMessage>Error message</FormValidationMessage> */}


        <TouchableOpacity 
            onPress={this._signInAsync}
        >
            <Text 
            style={styles.button}>Sign In
            </Text>
        </TouchableOpacity>


        <Button
            title= "Cancel"
            onPress={() => this.props.navigation.navigate('Gate')}
          />

        </View>
      );
    }

    _signInAsync = async () => {
        var myInit = {
            method: 'POST',
            // body: JSON.stringify({username: "brandybs", password: "newpjass1"}),
            body: JSON.stringify({username: this.state.userText, password: this.state.passText}),
            credentials: "include",
            // headers: {
            //     'Authorization': bearer,
            //     //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            //     'Content-Type': 'application/json'
            // },
            // mode: 'cors',
            // cache: 'default' 
        };

        var myRequest = new Request(root_url + 'users/login', myInit);
        await
            fetch(myRequest)
                .then((response) => response.text())
                .then((responseJson) => {
                    console.log(responseJson)
                    if(responseJson === 'succesful login!') {
                        AsyncStorage.setItem('userToken', this.state.userText);
                        this.props.navigation.navigate('App');
                    } else {
                        throw 'Invalid password/username, please try again or go back and try forgot password/username.'
                    }
                    
                })
                .catch((error) => {
                    alert(error);
                });
            
       
        
      };
}

  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      backgroundColor: '#4B9CD3',
      borderRadius: 25,
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