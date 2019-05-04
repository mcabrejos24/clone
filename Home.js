import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, StatusBar, TextInput, ScrollView, Dimensions, FlatList, AsyncStorage } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { SearchBar, Input, Header, ListItem, Tile } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ProfileStack } from './Profile.js'
import { SettingsScreen } from './Settings.js'
import { PostScreen } from './Post.js'
const root_url = 'https://clone-applab.herokuapp.com/';

var {height, width} = Dimensions.get('window')  //to get the height and width
var self //for a global variable of this


//console.log(width)
//console.log(height)
//------------------------------use above to find width and height of whole screen and bottom for a specific view
// onLayout={(event) => {
//   var {x, y, width, height} = event.nativeEvent.layout
//   console.log(width)
//   console.log(height)
// }}


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
    var thing ='dfsdf'
    this._postAsync()
    //console.log(allFriendPosts)
    this.state = {
      data: [
        // {
        //   name: 'Harrison',
        //   subtitle: 'Trying out this new social media!',
        //   avatar_url: 'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',
        // },
        // {
        //   name: 'Enzo',
        //   subtitle: 'This is chill.',
        //   avatar_url: 'https://scontent-yyz1-1.cdninstagram.com/vp/1fc2708e73ddfc92c3de18853256b41d/5D12B475/t51.2885-19/s150x150/14714595_372764783059210_1813347707905900544_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        // },
      ],
    }
  }
  

  _postAsync = async () => {
    
    var loadAll = {
      method: 'GET',
      //body: JSON.stringify({post_id: '3'}),
      credentials: "include",

    }

    var myRequest = new Request(root_url + 'posts', loadAll);

    //var thing1 = 
    fetch(myRequest)
      //.then((response) => response.text())
      .then((response) => response.text())
        .then((responseJson) => {
          var objPost = JSON.parse(responseJson)
        for(var i=0; i<objPost.length; i++  ){
          console.log(objPost[i])
          
          var pic = objPost[i].picture;
          
          if(pic == null){
            pic = 'https://cdn.dribbble.com/users/246953/screenshots/4208078/jellyfish.png';
          }
          console.log(objPost[i].username)
          console.log('here----')

          var smallRequest = new Request(root_url + 'users/:' + objPost[i].username, {method: 'GET', credentials: "include",})
          fetch(smallRequest)
            .then((response) => console.log(response))
            //here last time, want to make sure it can get the friend's names for posts



          var object = {
            user: objPost[i].username,
            username: objPost[i].username,
            content: objPost[i].body,
            avatar_url: pic,
          }
          //this.state.data.push(object);
          this.state.data.push(object);
          this.setState({ data: this.state.data, },)
          console.log(this.state.data)

        }
        
        //when signed in, this definitely has all the posts but we need to figure out a way to make it so that this value can go into something outside
        //otherwise we just have to make the entire page be inside of here
          //console.log(this.state.data)



        //   this.state.data = [{
        //     name: 'Harrison',
        // //   subtitle: 'Trying out this new social media!',
        // //   avatar_url: 'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',

        //   }]

    //  AsyncStorage.setItem('posts', responseJson);

    })

    

    var foundPost = async () => {
      let posts = '';
      try {
        posts = await AsyncStorage.getItem('posts');
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
      return posts;
    }
    //console.log(foundPost)
    
    // var sweet = AsyncStorage.getItem('posts', (err, result) => {
    //   //console.log(result + 's') 
      
    
    // });
    // console.log('below')
    // console.log(this.state.data)
    
   
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

  loadNewPost = (newText, user) => {
    //AsyncStorage.getItem('userToken', (err, result) => {
      //console.log(result + 's')
      
      var myInit = {
        method: 'POST',
        body: JSON.stringify({body: newText}),
        credentials: "include",

      }

      var myRequest = new Request(root_url + 'posts', myInit);

      fetch(myRequest)
        //.then((response) => response.text())
        .then((response) => response.text())
          .then((responseJson) => {
          console.log(responseJson)
      //     // if(responseJson === 'succesful login!') {
      //     //     AsyncStorage.setItem('userToken', this.state.userText);
      //     //     this.props.navigation.navigate('App');
      //     // } else {
      //     //     throw 'Invalid password/username, please try again or go back and try forgot password/username.'
      //     // }
          
      })

    //});




    //-------------------------this is just text code
    users = ['Morgan Freeman', 'Harrison Reid', 'Dom Giordano', 'Enzo Huang', 'Tony Stark', 'Thanos']
    avatars = [
      'https://i.pinimg.com/236x/16/73/2a/16732a398812e81f9e15d2d1f819cce9--morgan-freeman.jpg?b=t',
      'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',
      'https://pbs.twimg.com/profile_images/1089779954148130817/PH_LiD8h_400x400.jpg',
      'https://scontent-yyz1-1.cdninstagram.com/vp/1fc2708e73ddfc92c3de18853256b41d/5D12B475/t51.2885-19/s150x150/14714595_372764783059210_1813347707905900544_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
      'https://assets.faceit-cdn.net/avatars/c1bd800c-1770-4b1f-879f-52f27c84c6f4_1551064917661.jpg',
      'https://swishtoday.com/wordpress/wp-content/uploads/2018/12/93ee86a7b97b1e1c207579f298ef97a0cf2d2f1bv2hqjpg-1024x914.',
    ]
    usernames = ['mfreedog', 'harrypottreid', 'd-rick', 'enzhoe\'s', 'ironMan', 'theWorst']
    //--------------------------
    if(user == null) {
      var random = Math.floor(Math.random()*(users.length))
      userSelect = users[random]
      avatar = avatars[random]
      usernameSelect = usernames[random]
    }
    let newUserPost = {
      user: userSelect,
      username: usernameSelect,
      content: newText,
      avatar_url: avatar,
    };
    this.state.data.push(newUserPost);
    this.setState({ data: this.state.data, },)
  }

  keyExtractor = ( item , index) => index.toString()

  renderItem = ({ item }) => (
    // <Tile>
      <View>
    <ListItem
      title={item.user}
      subtitle={'@'+item.username}
      //={item.content}
      leftAvatar={{ source: { uri: item.avatar_url }}}
      //badge={{ value: likes, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
      rightIcon={
        <Ionicons
        name =  {"md-heart"} 
        color= {"red"}
        size = {25}
        onPress={() => alert('You Liked the Jelly')}
       
        />
      }
     // onPress={}
      //style={{alignItems: "left", justifyContent: "left" }} 
      

    />
    <Text style={{ marginLeft: 70 }}>
      {item.content}
    </Text>
    </View>
    
    
    
  )

  render() {
    if(this.state.data.length == 0){
      return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#6a51ae"
          />
          <FlatList 
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />

          <Text style={{fontSize:25}}>Welcome to Clone!{"\n"}</Text>
          <Text>Check back here any time to find posts from people you follow.</Text>
          
        </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
        {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#6a51ae"
          />
          <FlatList 
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>
        </ScrollView>
      );
    }
  }

}

class NewPost extends React.Component { //making a new post
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  updateList(newText, lastpageHome) {
    lastpageHome.loadNewPost(newText)
    this.props.navigation.goBack()
  }

  render() {
    const { navigation } = this.props;
    const lastpageHome = navigation.getParam('page');
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