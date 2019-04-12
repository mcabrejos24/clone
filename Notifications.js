import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TextInput, Dimensions, FlatList, TouchableOpacity, Image} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SearchBar, Input, Header, ListItem } from 'react-native-elements';
//import App from './App';
import Icon from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Ionicons } from '@expo/vector-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';


var {height, width} = Dimensions.get('window')
var likes = 0


const alllist = [
  {
    name: 'Harrison Reid',
    avatar_url: 'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',
    subtitle: 'Wants to Follow You'
    

  },
  {
    name: 'Enzo Huang',
    avatar_url: 'https://scontent-yyz1-1.cdninstagram.com/vp/1fc2708e73ddfc92c3de18853256b41d/5D12B475/t51.2885-19/s150x150/14714595_372764783059210_1813347707905900544_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
    subtitle: 'Wants to Follow You'
  },
  {
    name: 'Dom',
    avatar_url: 'https://pbs.twimg.com/profile_images/1089779954148130817/PH_LiD8h_400x400.jpg',
    subtitle: 'Wants to Follow You'
  }
  
  
]

const requestslist = [
  {
    name: 'Harrison Reid',
      avatar_url: 'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',
      subtitle: 'Wants to Follow You'
    
    }

]



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

class NotificationsScreen extends React.Component {
  
  
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder',
    loading: false,      
    data: [],      
    error: null,  
    data: [
      {key: 'First'},
      {key: 'Last'},
    ]
    
  };

  };

  
  
  
  static navigationOptions = ({ navigation }) => {
   // const { search } = this.state;
    return{ 

      headerTitle: <LogoTitle />,
      headerBackTitle: 'Home',
      headerLeft: (
        <Button 
          title = 'All'
          type= "clear"
          onPress={() => navigation.navigate('Home')}
          color = "white"
          backgroundColor = "black"
          // style = {{
          //   fontSize: 32,
          //   marginLeft: 15,
          //   color: 'white'
          // }}
        >
          {/* <FontAwesomeIcon 
            icon={ faAmbulance } size={25} style={{color: 'white' }}
          /> */}
        </Button>
      ),
      headerRight: (
        <Button 
        title = 'Requests'
        type= "clear"
        onPress={() => navigation.navigate('Notifications')}
        color = "white"
        backgroundColor = "black"
        // style = {{
        //   fontSize: 32,
        //   marginLeft: 15,
        //   color: 'white'
        // }}
      >
        {/* <FontAwesomeIcon 
          icon={ faAmbulance } size={25} style={{color: 'white' }}
        /> */}
      </Button>
      ),
      
      headerTitle: (
        <Button 
        title = 'Mentions'
        type= "clear"
        onPress={() => navigation.navigate('Home')}
        color = "white"
        backgroundColor = "black"
        // style = {{
        //   fontSize: 32,
        //   marginLeft: 15,
        //   color: 'white'
        // }}
      >
        {/* <FontAwesomeIcon 
          icon={ faAmbulance } size={25} style={{color: 'white' }}
        /> */}
      </Button>
      )
      
    
    }
  
  };

  // searchFilterFunction = search => {    
  //   const newData = this.list.filter(item => {      
  //     const itemData = `${item.name.toUpperCase()}`;
  //      const textData = search.toUpperCase();
        
  //      return itemData.indexOf(textData) > -1;    
  //   });    
  //   this.setState({ data: newData });  
  // };


keyExtractor = ( item , index) => index.toString()


renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url }}}
    onPress={() => this.props.navigation.navigate('Profile')}
    //badge={{ value: likes, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
    rightIcon={
      
        <Ionicons
        name =  {"ios-person-add"} 
        color= {"#4B9CD3"}
        size = {25}
        onPress={() => alert('You Accepted the Follow Request')}
       
        />
      }
     
  
   // onPress={}
    //style={{alignItems: "left", justifyContent: "left" }} 

  />
)



  render() {

    
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}
      
     onLayout={(event) => {
       var {x, y, width, height} = event.nativeEvent.layout
       //console.log(width)
       //console.log(height)
     }}
      >

 
  <FlatList
      data={alllist}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
      
    />

  

<Button
          title= 'Go HOme'
          onPress={() => alert(search)}
        />
       
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
 
    
        

      </SafeAreaView>

      
      
    );
  }
}

export const NotificationsStack = createStackNavigator(
  {
      Notification: NotificationsScreen,

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






// export const Notifications = (props) => {
//     return (
//       <View>

        
//       </View>
//     )
//   }