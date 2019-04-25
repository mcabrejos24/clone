import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { FormLabel, FormValidationMessage } from 'react-native-elements';

const root_url = 'https://clone-applab.herokuapp.com/';

export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userText : 'd',
      firstText : 'd',
      lastText : 'd',
      passText : 'aaa',
      emailText : 'aaaa',
      phoneText : '3344q3433',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>SignUp Screen</Text>
        {/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        {/* <FormLabel>Name</FormLabel>
        <FormValidationMessage>Error message</FormValidationMessage> */}

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='Username here...'
          inlineImageLeft='search_icon'
          onChangeText={(userText) => this.setState({ userText })}
          value={this.state.userText}
          style={{
            alignItems: "center",
            borderColor: 'grey',
            borderWidth: 1,

            width: 300,
            height: 50,
            fontSize: 20
          }}
        />

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='First name here...'
          inlineImageLeft='search_icon'
          onChangeText={(firstText) => this.setState({ firstText })}
          value={this.state.firstText}
          style={{
            alignItems: "center",
            borderColor: 'grey',
            borderWidth: 1,

            width: 300,
            height: 50,
            fontSize: 20
          }}
        />

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='Last name here...'
          inlineImageLeft='search_icon'
          onChangeText={(lastText) => this.setState({ lastText })}
          value={this.state.lastText}
          style={{
            alignItems: "center",
            borderColor: 'grey',
            borderWidth: 1,

            width: 300,
            height: 50,
            fontSize: 20
          }}
        />

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='Password here...'
          inlineImageLeft='search_icon'
          onChangeText={(passText) => this.setState({ passText })}
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

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='Email here...'
          inlineImageLeft='search_icon'
          onChangeText={(emailText) => this.setState({ emailText })}
          value={this.state.emailText}
          style={{
            alignItems: "center",
            borderColor: 'grey',
            borderWidth: 1,

            width: 300,
            height: 50,
            fontSize: 20
          }}
        />

        <TextInput
          {...this.props} // 
          editable={true}
          maxLength={40}
          placeholder='Phone number here...'
          inlineImageLeft='search_icon'
          onChangeText={(phoneText) => this.setState({ phoneText })}
          value={this.state.phoneText}
          style={{
            alignItems: "center",
            borderColor: 'grey',
            borderWidth: 1,

            width: 300,
            height: 50,
            fontSize: 20
          }}
        />

        <TouchableOpacity 
            onPress={this._signUpAsync}
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

  _signUpAsync = async () => {
    var myInit = {
      method: 'POST',
      // body: JSON.stringify({username: "brandybs", password: "newpjass1"}),
      body: JSON.stringify({
        username: this.state.userText,
        firstname: this.state.firstText,
        lastname: this.state.lastText,
        password: this.state.passText,
        email: this.state.emailText,
        phone: this.state.phoneText,
        profile_picture: 'this.state.profile_picture'
        
      }),
      credentials: "include",
    };

    var myRequest = new Request(root_url + 'users', myInit);

    await
            fetch(myRequest)
            .then((responseJson) => {
              console.log(responseJson._bodyInit + 'yup')
              if(responseJson._bodyInit !== '') {
                  AsyncStorage.setItem('userToken', this.state.userText);
                  this.props.navigation.navigate('App');
              } else {
                  throw 'This user already seems to exist, please only enter new user credentials.'
              }
              
          })
          .catch((error) => {
              alert(error);
          });




  }
  


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
