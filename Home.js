import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { ProfileScreen } from './Profile.js'
import { SettingsScreen } from './Settings.js'
import { PostScreen } from './Post.js'


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

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerBackTitle: 'Home',
      headerLeft: (
        <TouchableOpacity 
          onPress={() => navigation.openDrawer()}
          style = {{
            fontSize: 32,
            marginLeft: 15,
          }}
        >
          <FontAwesomeIcon 
            icon={ faUserCircle } size={25} style={{color: 'white' }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity 
          onPress={() => navigation.navigate('NewPost')}
          style = {{
            fontSize: 32,
            marginRight: 15,
          }}
        >
          <FontAwesomeIcon 
            icon={ faPlusCircle } size={25} style={{ width: 24, height: 24, color: 'white' }}
            // I think the width and height don't do anything because need to do it with size and isn't a picture so might take off
          />
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
        </TouchableOpacity>
      ), 
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Image
        source={require('./jelly.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
      )
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

class NewPost extends React.Component { //making a new post
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="black"
        />
        <TouchableOpacity
          color="#4B9CD3"
          style = {{
            fontSize: 30,
            marginRight: 15,
            //right: 140,
            bottom: 230,
            left: 30,
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesomeIcon 
            icon={ faTimes } size={25} style={{color: '#4B9CD3' }}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            padding: 5,
            margin: 5,
            height: 30, 
            // borderColor: 'black', 
            // borderWidth: 1,
            bottom: 215,
            left: 20,
            //right: 100,
          }}
          placeholder='Write a new post!'
          placeholderTextColor='grey'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        {/* This is the right button */}
        <TouchableOpacity
          style = {{
            fontSize: 20,
            marginRight:20,
            marginLeft:20,
            marginTop:10,
            padding: 1,
            backgroundColor:'#4B9CD3',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#4B9CD3',
            bottom: 310,
            width: 45,
            left: 290,
          }}
          // onPress={() = > this.postSting}
        >
          <Text 
          style={{
            color: 'white',
            fontSize: 15,
            padding: 5,
          }}
          >
            Post
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Posts: PostScreen,
  },
  {
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4B9CD3',
        //carolina color
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    
  }
);



const HomeDrawer = createDrawerNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Posts: {
      screen: PostScreen,
    },
    Home: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
  },
  {
    initialRouteName: "Home"
  }
);

export const HomeStack = createStackNavigator(
  {
    Main: {
      screen: HomeDrawer,
    },
    NewPost: {
      screen: NewPost,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);