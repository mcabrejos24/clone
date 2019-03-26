import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image, Dimensions, Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes, faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons'
import ImageOverlay from "react-native-image-overlay";

var {height, width} = Dimensions.get('window')


class ProfileScreen extends React.Component {
  static navigationOptions =  {
    
      drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{width: 30, height: 30, borderRadius: 15, marginBottom: 300}}
      />
      )
  }
  constructor(){
 
    super();
 
    this.state= {imageUri: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    }  
  }
  Load_New_Image = () => {
    console.log(this.state)
    imageUri0 = 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    imageUri1 = 'https://ae01.alicdn.com/kf/HTB1GMT9of9TBuNjy1zbq6xpepXaC/Garden-Lake-House-piture-cross-stitch-Full-diamond-Needlework-gift-new-embroidery-mosaic-diy-5D-diamond.jpg_640x640.jpg'
    if (this.state.imageUri == imageUri0){
      this.setState({imageUri : imageUri1}) 
  }
    else if (this.state.imageUri == imageUri1){
      this.setState({imageUri : imageUri0}) 
  }
  console.log(this.state)
  }
  render() { 
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId, "NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
    <ImageOverlay
      source={{uri:"https://cdn.cnn.com/cnnnext/dam/assets/140420205944-02-stunning-nature---glowing-plankton---restricte.jpg"}} 

      containerStyle = {{
      height: height ,
      }}
      contentPosition="bottom">
      <View>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate("Picture")}>
        <Image style={{width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "#4B9CD3",
            marginHorizontal: width /2,
            marginBottom: 0
            }} 
            source={{ uri: this.state.imageUri }}
            />
          
        </TouchableOpacity>
        <Text
            style = {{
              fontWeight: "bold",
              fontSize: 30,
              marginTop: 10,
              marginBottom: 0,
              color: "white",
              textAlign: "center"
            }}>
              Enzohuang
        </Text>
        <Text
            style = {{
              fontWeight: "normal",
              fontSize: 15,
              marginTop: 10,
              marginBottom: 0,
              color: "white",
              textAlign: "center"
            }}>
              Chongqing, China | 19 
        </Text>
        <Text
            style = {{
              fontWeight: "normal",
              fontStyle: 'italic',
              fontSize: 12,
              marginTop: 30,
              marginBottom: 0,
              color: "white",
              textAlign: "center"
            }}>
              A little bio about myself
        </Text>
        <TouchableOpacity
          onPress={() => alert("cfds")}>
         <Image style= {{
           width: 30,
           height: 30,
           
           marginHorizontal: width /2 + 60,
           marginTop: 40,
           marginBottom: 300,

         }}
         source = {{ uri : "https://heroeshearth.com/images/icon-edit.png"}}
          />
          
        </TouchableOpacity>
    </View>
</ImageOverlay>
           
      </View>
    );
  }

  
}

var value = new ProfileScreen
class PictureScreen extends React.Component {
  update = () => {
    value.Load_New_Image()
    this.props.navigation.navigate("Profile")
  }
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
          <TouchableOpacity
          onPress={this.update}>
        <Text style={{ 
          fontSize: 35 
          }}>
          Choose a photo</Text>
          </TouchableOpacity>
        {/* This is the left button */}
        {/* <TouchableOpacity
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
            right: 140,
            
          }}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Text 
          style={{
            
            color: 'white',
            fontSize: 15,
            padding: 5,
            
          }}>
            Profile
          </Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Picture: {
      screen: PictureScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
  
  // {
    
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#4B9CD3',
  //       //carolina color
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   },
    
  // }
);
// export const Profile = (props) => {
//     return (
//       <View>
//         <Text> 
//           profile
//         </Text>
//           <Photo />
//           <RealName />
//           <Username />
//           <YourPosts />
//           <Settings />
//       </View>
//     )
//   }
  
//   const Photo = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
  
//   const RealName = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const Username = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const YourPosts = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }
//   const Settings = (props) => {
//     return (
//       <View>
          
//       </View>
//     )
//   }