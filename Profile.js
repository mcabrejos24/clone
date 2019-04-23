import React from 'react'
import { TouchableOpacity, TextInput, SafeAreaView, Text, View, StyleSheet, Image, Dimensions, ScrollView, StatusBar,Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes, faGrinTongueSquint, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ImageOverlay from "react-native-image-overlay";
import { Sae, Kaede, Fumi, Madoka } from 'react-native-textinput-effects';
import { Camera, BarCodeScanner, Permissions, CameraRoll, ImagePicker } from 'expo';

var { height, width } = Dimensions.get('window')
const options = {
  title : "My pic",
  takePhoto : "Take Photo",
  choosePhoto : "Choose Photo"
}

class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUri: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Enzo huang',
      userName: 'enzohuang7582',
      location: 'Chongqing, China',
      age: '19',
      bio: 'a little bio about myself',
      avatarsrc: null
      
    }
  }

  Load_New_Image = () => {
    imageUri0 = 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    imageUri1 = 'https://ae01.alicdn.com/kf/HTB1GMT9of9TBuNjy1zbq6xpepXaC/Garden-Lake-House-piture-cross-stitch-Full-diamond-Needlework-gift-new-embroidery-mosaic-diy-5D-diamond.jpg_640x640.jpg'
    if (this.state.imageUri == imageUri0) {
      this.setState({ imageUri: imageUri1 })
    }
    else if (this.state.imageUri == imageUri1) {
      this.setState({ imageUri: imageUri0 })
    }
  }


  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageOverlay
          source={{ uri: "https://cdn.cnn.com/cnnnext/dam/assets/140420205944-02-stunning-nature---glowing-plankton---restricte.jpg" }}
          containerStyle={{
            height: height,
          }}
          contentPosition="bottom">
          <SafeAreaView  style={{flex: 1, alignItems: "center", justifyContent: "center"}} 
          onLayout={(event) => {
            var {x, y, width, height} = event.nativeEvent.layout
          }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Picture", { page: this })}
              >

              <Image style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: "#4B9CD3",
                // marginHorizontal: width / 2,
                // marginTop: "25%",
                marginBottom: 0
              }}
                source={{ uri: this.state.imageUri }}
              />

            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginTop: 10,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              {this.state.name}
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 12,
                marginTop: 0,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              @{this.state.userName}
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 20,
                marginTop: 10,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              {this.state.location} | {this.state.age}
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontStyle: 'italic',
                fontSize: 15,
                marginTop: 30,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              {this.state.bio}
            </Text>
            <View
            style ={{
              marginTop: "9%",
              marginBottom: "0%",
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Edit", { page: this })}
              style= {{ flex: 0.25}}
              >
              <Image style={{
                width: 30,
                height: 30,

                marginHorizontal: width / 2 + 60,
                // marginTop: "8%",
                // marginBottom: "40%",

              }}
                source={{ uri: "https://heroeshearth.com/images/icon-edit.png" }}
              />

            </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageOverlay>

      </SafeAreaView>
    );
  }
}

class PictureScreen extends React.Component {
  update(lastPage) {
    lastPage.Load_New_Image();
    this.props.navigation.navigate('Profile')
  }

  getSelectedImages(image) {
    if (image[0]){
      alert(image[0].uri);
    }
  }
  render() {
    const { navigation } = this.props;
    const lastPage = navigation.getParam('page');
    return (
      <SafeAreaView>
      {/* style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor="black"
        />
        <TouchableOpacity
          color="#4B9CD3"
          style={{
            marginTop:"4%",
            marginLeft: "3%",
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesomeIcon
            icon={faTimes} size={25} style={{ color: '#4B9CD3' }}
          />
        </TouchableOpacity>
        <View
        style = {{
          alignItems: 'center', justifyContent: 'center'
        }}>
        <TouchableOpacity
          style={{
            marginTop:"50%",
            marginBottom: "0%"
          }}
          onPress={() =>
            this.props.navigation.navigate('Camera')
           // this.update(lastPage)
          }>
          <Text style={{
            fontSize: 25
          }}>
            Open Your Camera</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={{
            marginTop:"0%",
            marginBottom: "0%"
          }}
          onPress={() =>
            this.props.navigation.navigate('Photo')
           // this.update(lastPage)
          }>
          <Text style={{
            fontSize: 25
          }}>
            Get Photo</Text>
        </TouchableOpacity> 
        </View>
      </SafeAreaView>
    );
  }
}


class EditScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      userName: '',
      location: '',
      age: '',
      bio: '',
      length: 35,
    }
  }
  updateProfile(lastPage) {
    var name = (this.state.name == '') ? lastPage.state.name : this.state.name
    var user = (this.state.userName == '') ? lastPage.state.userName : this.state.userName
    var location = (this.state.location == '') ? lastPage.state.location : this.state.location
    var age = (this.state.age == '') ? lastPage.state.age : this.state.age
    var bio = (this.state.bio == '') ? lastPage.state.bio : this.state.bio
    lastPage.setState({
      name: name,
      userName: user,
      location: location,
      age: age,
      bio: bio,
    });
    this.props.navigation.navigate('Profile')
  }

  updateBio() {
    this.setState({
      bio: lastPage.state.bio
    })
  }

  render() {
    const { navigation } = this.props;
    const lastPage = navigation.getParam('page');
    var length = this.state.bio.length;
    return (

      <ScrollView>
        <View style={[styles.card1, { backgroundColor: 'white' }]}>
          <Text style={styles.title}>Edit Your Profile</Text>
          <Kaede style={styles.input}
            label="Name"
            placeholder={lastPage.state.name}
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            onChangeText={(name) => this.setState({ name })}
          />
          <Kaede style={styles.input}
            label="User Name"
            placeholder={lastPage.state.userName}
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            onChangeText={(userName) => this.setState({ userName })}
          />
          <Kaede style={styles.input}
            label="Location"
            placeholder={lastPage.state.location}
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            onChangeText={(location) => this.setState({ location })}
          />
          <Kaede style={styles.input}
            label="Age"
            placeholder={lastPage.state.age}
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            keyboardType="numeric"
            onChangeText={(age) => this.setState({ age })}
          />
        </View>
        <View>
          <FloatingLabelInput
            style={styles.input}
            label="Bio"
            onChangeText={(bio) => this.setState({ bio })}
            placeholder="A little bio about myself"
            clearButtonMode='always'
          >
            {lastPage.state.bio}
          </FloatingLabelInput>
        </View>
        <View>
          <Text 
            style = {{
              color: '#aaa',
              fontSize: 10,
              marginLeft: 5
            }}
          >
            {35-length}/35
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={{
                fontSize: "20%",
                marginRight: "20%",
                marginLeft: "20%",
                marginTop: "30%",
                padding: 1,
                backgroundColor: '#4B9CD3',
                borderRadius: 10,
                //borderWidth: 1,
                borderColor: '#4B9CD3',
                top: "10%",
                width: "35%",
                left: "5%",
                height: "48%",
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.goBack()}
            //onPress={() => this.updateList(this.state.text)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  padding: 5,
                  alignContent: 'center',
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                fontSize: "20%",
                marginRight: "20%",
                marginLeft: "20%",
                marginTop: "30%",
                padding: 1,
                backgroundColor: '#4B9CD3',
                borderRadius: 10,
                //borderWidth: 1,
                borderColor: '#4B9CD3',
                top: "10%",
                width: "35%",
                height: "48%",
                left: "20%",
                alignItems: 'center',
              }}
              // onPress={() => this.props.navigation.goBack()}
              onPress={() => this.updateProfile(lastPage)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  padding: 5,
                  alignContent: 'center',
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    )
  }
}
// class PhotoScreen extends React.Component {
//   state = {
//     image: null,
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this._pickImage}
//         />
//         {image &&
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

// //   _pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //     });

// //     console.log(result);

// //     if (!result.cancelled) {
// //       this.setState({ image: result.uri });
// //     }
// //   };
// }

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <SafeAreaView style={styles.container1}>
         <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 0.1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <View>
              <TouchableOpacity
                style={{
                  
                  flex: 1,
                  
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.props.navigation.goBack()
                }}>
                <FontAwesomeIcon 
                  icon={ faTimes } size={35} style={{ marginTop: "19%", marginRight: "2%", color: 'white' }}
                />
              </TouchableOpacity>
              </View>
              <View style = {{marginLeft : "60%"}}>
              <TouchableOpacity
                style={{
                  
                  flex: 1,
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <FontAwesomeIcon 
                  icon={ faSyncAlt } size={35} style={{ marginTop: "10%", marginLeft: "50%", color: 'white' }}
                />
              </TouchableOpacity>
              </View>
            </View>
            <View style ={{
              marginTop: "100%"
            }}>
            <TouchableOpacity
                style={{
                  marginTop : "50%",
                  flex: 0,
                  alignItems: 'center',
                }}
                onPress={() => {
                  CameraRoll.getPhotos(params)
                }}>
                <FontAwesomeIcon 
                  icon={ faTimes } size={35} style={{ marginLeft: "0%", color: 'white' }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
      </SafeAreaView>
    );
  }
}



class FloatingLabelInput extends React.Component {
  state = {
    isFocused: true,
  };

  render() {
    const { label, ...props } = this.props;
    const isFocused = this.state.isFocused;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#aaa' : '#aaa',
    };
    return (
      <View style={{
        paddingTop: 18,
        marginLeft: 5,
        width: "97%"
      }}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={{ height: 40, fontSize: 15, color: '#000', borderBottomWidth: 3, borderBottomColor: '#4B9CD3' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // height = "30%"
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: "2%",
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#4B9CD9',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  container1: {
    height: height,
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },  
    },
    Picture: {
      screen: PictureScreen,
    },
    Edit: {
      screen: EditScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    // Photo: {
    //   screen: PhotoScreen,
      
    // }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
  { 
    navigationOptions: {
      headerVisible: false,
  }
  },

  
)

