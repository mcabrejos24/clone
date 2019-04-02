import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar, TextInput, ScrollView, Dimensions, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { ProfileStack } from './Profile.js'
import { SettingsScreen } from './Settings.js'
import { PostScreen } from './Post.js'

var {height, width} = Dimensions.get('window')  //to get the height and width
var self //for a global variable of this

console.log(width)
console.log(height)


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
  constructor() {
    super();
    self = this;
    this.state = {
      data: [
        {key: 'Devin'},
        {key: 'Jackson'},
      ],
    }
  }

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
          onPress={() => navigation.navigate('NewPost', { page: self } )}
          //onPress={() => navigation.getParam('callfunc')}
          //onPress={state.params._handleFilterPress()}
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

  loadNewPost = (newText) => {
    this.setState({ data: [
      {key: newText},
      {key: 'something new'},
    ], },)
  }

  render() {
    return (
      
      <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <FlatList 
        data={this.state.data}
        //data
        renderItem={({item}) => <Text style={{padding: 10,
          fontSize: 18,
          height: 44,}}>{item.key}</Text>}
        
        />
        {/* <Text>{this.state.data[0].key}</Text> */}
        <Text style={{fontSize:25}}>Welcome to Clone!{"\n"}</Text>
        <Text>Check back here any time to find posts from people you follow.</Text>
        <Button onPress={() => this.props.navigation.navigate('NewPost', { page: this } )} title='this' /> 
      </View>
      </ScrollView>
    );
  }
}


class NewPost extends React.Component { //making a new post
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  //obiwon
  updateList(newText, lastpageHome) {
    lastpageHome.loadNewPost(newText)
    this.props.navigation.goBack()
  }


  render() {
    const { navigation } = this.props;
    const lastpageHome = navigation.getParam('page');
    console.log(lastpageHome)
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}

      // onLayout={(event) => {
      //   var {x, y, width, height} = event.nativeEvent.layout
      //   console.log(width)
      //   console.log(height)
      // }}
      >
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
            bottom: "24%",
            left: 30,
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesomeIcon 
            icon={ faTimes } size={25} style={{color: '#4B9CD3' }}
          />
        </TouchableOpacity>
        <TextInput 
          multiline={true}
          placeholder='Write a new post!'
          placeholderTextColor='grey'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          // onContentSizeChange={(event) => {
          //   this.setState({ height: event.nativeEvent.contentSize.height })
          // }}

          style={{
            padding: 5,
            margin: 5,
            height: "35%", 
            width: "85%",
            //borderColor: 'black', 
            //borderWidth: 1,
            bottom: "22.6%",
            left: 20,
            //right: 100,
          }}
        />
        {/* This is the right button */}
        <TouchableOpacity
          style = {{
            fontSize: "20%",
            marginRight: "20%",
            marginLeft: "20%",
            marginTop: 10,
            padding: 1,
            backgroundColor:'#4B9CD3',
            borderRadius:10,
            //borderWidth: 1,
            borderColor: '#4B9CD3',
            bottom: "67%",
            width: "12%",
            height: "5%",
            left: "59%",
            
          }}
          onPress={() => this.updateList(this.state.text, lastpageHome)}
        >
          <Text 
          style={{
            color: 'white',
            fontSize: 15,
            padding: 5,
            alignContent: 'center',
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
    //navigationOptions: {
    //  tabBarLabel: 'Home!'
    //}
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