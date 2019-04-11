import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TextInput, Dimensions, FlatList} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SearchBar, Input, Header, ListItem } from 'react-native-elements';
import App from './App';
import Icon from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Ionicons } from '@expo/vector-icons';


var {height, width} = Dimensions.get('window')
var likes = 0

const list = [
  {
    name: 'Harrison Reid',
    avatar_url: 'https://pbs.twimg.com/profile_images/914721150168698880/V3BKN27M_200x200.jpg',
    subtitle: 'Just Beat dom in basketball again. Wow he is terrible'
  },
  {
    name: 'Enzo Huang',
    avatar_url: 'https://scontent-yyz1-1.cdninstagram.com/vp/1fc2708e73ddfc92c3de18853256b41d/5D12B475/t51.2885-19/s150x150/14714595_372764783059210_1813347707905900544_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
    subtitle: 'I dont even know this dom guy but i heard he is terrible at basketball'
  },
  {
    name: 'Dom',
    avatar_url: 'https://pbs.twimg.com/profile_images/1089779954148130817/PH_LiD8h_400x400.jpg',
    subtitle: 'Wow i cant believe manuel is better at basketball than me'
  },
  
]

 

class NotificationsScreen extends React.Component {
  state = {
    search: 'this is what i should see',
  };
  updateSearch = search => {
    this.setState({ search });
    


  };
  
  
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
    title: 'home',
    
    header: (
    
      <SafeAreaView>
      {/* <SearchBar    
        
        ref={search => this.search = search}
        platform = 'ios'
        placeholder="Type Here..."
        containerStyle = {{ backgroundColor: '#4B9CD3' }}
        onChangeText={this.updateSearch}
        value={search}  
     /> */}
    </SafeAreaView>

    
    ),
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
)



  render() {
    const { search } = this.state; 
    
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}
      
     onLayout={(event) => {
       var {x, y, width, height} = event.nativeEvent.layout
      // console.log(width)
      // console.log(height)
     }}
      >

<SearchBar    
        
        ref={search => this.search = search}
        platform = 'ios'
        placeholder="Type Here..."
       containerStyle = {{ backgroundColor: '#4B9CD3', bottom: '6%', paddingTop: '12%', paddingBottom: '-15%' }}
      // containerStyle = {{ backgroundColor: '#4B9CD3'}}
        cancelButtonProps = {{ color: 'white'}}
        onChangeText={this.updateSearch}
       // onChangeText={search => this.searchFilterFunction(search)}
       
        value={search}  
        
        
     />   


 
  <FlatList
      data={list}
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