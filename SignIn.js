import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { FormLabel, FormValidationMessage} from 'react-native-elements'

const root_url = 'https://clone-applab.herokuapp.com/';

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

     

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{marginTop: 100}}>SignIn Screen</Text>
          
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
            body: JSON.stringify({username: "brandybs", password: "newpass1"}),
            //body: JSON.stringify({username: this.state.userText, password: this.state.passText}),
            // headers: {
            //     'Authorization': bearer,
            //     //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            //     'Content-Type': 'application/json'
            // },
            mode: 'cors',
            cache: 'default' 
        };
        //const url = root_url + `users/login?username=${encodeURIComponent(this.state.userText)}&password=${encodeURIComponent(this.state.passText)}`;
        //console.log(this.state.userText)
        var myRequest = new Request(root_url + 'users/login', myInit);
    
        fetch(myRequest)
            .then(function(response) {
                console.log(response.text())
            })
            


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