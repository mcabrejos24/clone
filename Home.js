import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { ProfileStack } from './Profile.js'
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
          //onPress={() => navigation.navigate('Profile')}
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

class NewPost extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          color="#4B9CD3"
          style = {{
            fontSize: 30,
            marginRight: 15,
            right: 140,
            bottom: 235,
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesomeIcon 
            icon={ faTimes } size={25} style={{color: '#4B9CD3' }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 35 }}>Write a new post!</Text>
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
            bottom: 317,
            left: 140,
            
          }}
          // onPress={() = > this.postSting}
        >
          {/* <FontAwesomeIcon
            
          /> */}
          <Text 
          style={{
            
            color: 'white',
            fontSize: 15,
            padding: 5,
            
          }}>
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
    Profile: ProfileStack,
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
      screen: ProfileStack,
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