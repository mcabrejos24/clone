import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar, TextInput, ScrollView, Dimensions, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { ProfileStack } from './Profile.js'
import { SettingsScreen } from './Settings.js'
import { PostScreen } from './Post.js'

var {height, width} = Dimensions.get('window')
<<<<<<< HEAD

console.log(width);
console.log(height);
=======
//var {height, width} = Dimensions.get('textinput')

console.log(width)
console.log(height)
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145

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

state = {
  data: [
    {key: 'Devin'},
    {key: 'Jackson'},
  ],
};

class HomeScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //this.state = list
  //   console.log(props)
  // }
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

  update() {
    //state.data[0].key = 'hey'
    console.log(state.data[0].key)
    this.setState({
      data: [
        {key: 'me'},
        {key: 'you'},
      ],
    })
  }

  // state = {
  //   count: 0,
  // };

  state = {
    data: [
      {key: 'Devin'},
      {key: 'Jackson'},
    ],
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1});
  }
  //from last time

  render() {
    return (
      
      <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <FlatList 
        data={state.data}
        //data
        renderItem={({item}) => <Text style={{padding: 10,
          fontSize: 18,
          height: 44,}}>{item.key}</Text>}
        
        />
        <Text>{state.data[0].key}</Text>
        <Text style={{fontSize:25}}>Welcome to Clone!{"\n"}</Text>
        <Text>Check back here any time to find posts from people you follow.</Text>
        {/* <Text> Count: {this.state.count}</Text> */}
        <Text> Count: {this.state.data[0].key}</Text>
        {/* we're check here to see how to update it with a global, from last time */}
        <Button onPress={() => this.update()} title='this' /> 
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
  updateList(newText) {
    //this.getParam('change')
    state.data[0].key = newText
    alert(state.data[0].key)
    this.props.navigation.goBack()
    //this.props.navigation.
    //state.data[0].key
  }

  changeList = () => {
    //this.setState({ state.data[0].key:  });
  }

  componentDidMount() {
    //this.props.navigation.setParams({ change: this.changeList})
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}
<<<<<<< HEAD
      onLayout = {(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        console.log(width);
        console.log(height);
      }}
=======
      // onLayout={(event) => {
      //   var {x, y, width, height} = event.nativeEvent.layout
      //   console.log(width)
      //   console.log(height)
      // }}
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
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
<<<<<<< HEAD
            bottom: "38%",
=======
            bottom: "24%",
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
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
<<<<<<< HEAD
            height: "4.85%",
            width: "90%", 
            // borderColor: 'black', 
            // borderWidth: 1,
            bottom: 215,
=======
            height: "35%", 
            width: "85%",
            //borderColor: 'black', 
            //borderWidth: 1,
            bottom: "22.6%",
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
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
<<<<<<< HEAD
            marginTop:10,
             padding: 1,
=======
            marginTop: 10,
            padding: 1,
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
            backgroundColor:'#4B9CD3',
            borderRadius:10,
            //borderWidth: 1,
            borderColor: '#4B9CD3',
<<<<<<< HEAD
            bottom: "50%",
            width: "14%",
            height: "5%",
            left: "59%",
=======
            bottom: "67%",
            width: "12%",
            height: "5%",
            left: "59%",
            
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
          }}
          onPress={() => this.updateList(this.state.text)}
          //onPress={() => this.updateList(this.state.text)}
        >
          <Text 
          style={{
            color: 'white',
            fontSize: 15,
            padding: 5,
<<<<<<< HEAD
            alignContent: 'center'
=======
            alignContent: 'center',
>>>>>>> 4fb26b26d8c258b17c9db6089e93d33645ae4145
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