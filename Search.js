import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SearchBar, Input, Header, ListItem } from 'react-native-elements';





var {height, width} = Dimensions.get('window')

export class SearchScreen extends React.Component {
  state = {
    search: 'this is what i should see',
  };
  updateSearch = search => {
    this.setState({ search });
    
  }

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


  render() {
    const { search } = this.state; 
    return (

    
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}
      
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
     containerStyle = {{ backgroundColor: '#4B9CD3', bottom: '6%', paddingTop: '12%', paddingBottom: '-15%' }}
    // containerStyle = {{ backgroundColor: '#4B9CD3'}}
      cancelButtonProps = {{ color: 'white'}}
      onChangeText={this.updateSearch}
     // onChangeText={search => this.searchFilterFunction(search)}
     
      value={search}  
      
      
   />  
      
      <Button
          title= 'Go HOme'
          onPress={() => alert(search)}
        />


      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Search Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>

      </SafeAreaView>

    );
  }

}


  export const SearchStack = createStackNavigator(
    {
        Search: SearchScreen,
  
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

