import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TextInput, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SearchBar, Input, Header } from 'react-native-elements';


var {height, width} = Dimensions.get('window')

class NotificationsScreen extends React.Component {
  
  state = {
    search: 'this is what i should see',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
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



  render() {
    const { search } = this.state; 
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      
     onLayout={(event) => {
       var {x, y, width, height} = event.nativeEvent.layout
       //console.log(width)
       //console.log(height)
     }}
      >

<SearchBar    
        
        ref={search => this.search = search}
        platform = 'ios'
        placeholder="Type Here..."
        containerStyle = {{ backgroundColor: '#4B9CD3', bottom: '60%', paddingTop: '12%', }}
        onChangeText={this.updateSearch}
        value={search}  
        
     />
       
       
  <Text>Notifications Screen</Text>     
  
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