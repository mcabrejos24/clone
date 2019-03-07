import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Ionicons } from '@expo/vector-icons';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./jelly.png')}
        style={{ width: 30, height: 30 }}
      />
      
    );
  }
}

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerBackTitle: 'Home',
      headerLeft: (
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile')}
          style = {{
            fontSize: 32,
            marginLeft: 15,
          }}
        >
          <FontAwesomeIcon 
            icon={ faUserCircle } size={25} style={{ width: 24, height: 24, color: 'white' }}
          />
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity 
          onPress={() => alert("to post a new status, not there yet :')")}
          style = {{
            fontSize: 32,
            marginRight: 15,
          }}
        >
          <FontAwesomeIcon 
            icon={ faPlusCircle } size={25} style={{ width: 24, height: 24, color: 'white' }}
          />
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
        </TouchableOpacity>
      ), 
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <Text style={{fontSize:25}}>Welcome to Clone!</Text>
        <Text>Check back here any time to find posts from people you follow.</Text>
      </View>
    );
  }
}

//   const Posts = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  