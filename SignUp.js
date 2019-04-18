import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { FormLabel, FormValidationMessage} from 'react-native-elements';


export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
      <FormLabel>Name</FormLabel>


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


<FormValidationMessage>Error message</FormValidationMessage>


      </View>


    

        

          );
  }
}
