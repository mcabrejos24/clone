import React from 'react'
import { TouchableOpacity, TextInput, SafeAreaView, Text, View, StyleSheet, Image, Dimensions, Platform, StatusBar } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faUserCircle, faTimes, faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons'
import ImageOverlay from "react-native-image-overlay";
import { Sae, Kaede, Fumi } from 'react-native-textinput-effects';

var { height, width } = Dimensions.get('window')


class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUri: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      userName: 'Enzohuang',
      location: 'Chongqing, China',
      age: '19',
    }
  }
  static navigationOptions = {

    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
        style={{ width: 30, height: 30, borderRadius: 15, marginBottom: 300 }}
      />
    )
  }
  Load_New_Image = () => {
    console.log(this.state)
    imageUri0 = 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    imageUri1 = 'https://ae01.alicdn.com/kf/HTB1GMT9of9TBuNjy1zbq6xpepXaC/Garden-Lake-House-piture-cross-stitch-Full-diamond-Needlework-gift-new-embroidery-mosaic-diy-5D-diamond.jpg_640x640.jpg'
    if (this.state.imageUri == imageUri0) {
      this.setState({ imageUri: imageUri1 })
    }
    else if (this.state.imageUri == imageUri1) {
      this.setState({ imageUri: imageUri0 })
    }
    console.log(this.state)
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
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Picture", { page: this })}>
              <Image style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: "#4B9CD3",
                marginHorizontal: width / 2,
                marginBottom: 0
              }}
                source={{ uri: this.state.imageUri }}
              />

            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginTop: 10,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              {this.state.userName}
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 15,
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
                fontSize: 12,
                marginTop: 30,
                marginBottom: 0,
                color: "white",
                textAlign: "center"
              }}>
              A little bio about myself
        </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Edit", { page: this })}>
              <Image style={{
                width: 30,
                height: 30,

                marginHorizontal: width / 2 + 60,
                marginTop: "8%",
                marginBottom: "80%",

              }}
                source={{ uri: "https://heroeshearth.com/images/icon-edit.png" }}
              />

            </TouchableOpacity>
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
  render() {
    const { navigation } = this.props;
    const lastPage = navigation.getParam('page');
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} force>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="black"
        />
        <TouchableOpacity
          color="#4B9CD3"
          style={{
            fontSize: 30,
            marginRight: 15,
            right: 140,
            bottom: 235,
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesomeIcon
            icon={faTimes} size={25} style={{ color: '#4B9CD3' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.update(lastPage)
          }>
          <Text style={{
            fontSize: 35
          }}>
            Choose a photo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


class EditScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      location: '',
      age: '',
    }
  }
  updateProfile(lastPage) {
    lastPage.setState({
      userName: this.userName,
      location: this.location,
      age: this.age,
    });
    this.props.navigation.navigate('Profile')
  }
  
  render() {
    const { navigation } = this.props;
    const lastPage = navigation.getParam('page');
    return (

      <View>
        <View style={[styles.card1, { backgroundColor: 'white' }]}>
          <Text style={styles.title}>Edit Your Profile</Text>
          <Kaede style={styles.input}
            label={lastPage.state.userName}
            placeholder='your name'
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            onChangeText={(userName) => lastPage.setState({ userName })}
          />
          <Kaede style={styles.input}
            label={lastPage.state.location}
            placeholder='your location'
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            onChangeText={(location) => lastPage.setState({ location })}
          />
          <Kaede style={styles.input}
            label={lastPage.state.age}
            placeholder='your Age'
            labelStyle={{
              color: 'white',
              backgroundColor: '#4B9CD3',
            }}
            inputStyle={{
              color: '#4B9CD3',
              backgroundColor: 'white',
            }}
            keyboardType="numeric"
            onChangeText={(age) => lastPage.setState({ age })}
          />
          </View>

          <View style={styles.container}>
          <View>
          <TouchableOpacity
            style={{
              fontSize: "20%",
              marginRight: "20%",
              marginLeft: "20%",
              marginTop: 10,
              padding: 1,
              backgroundColor: '#4B9CD3',
              borderRadius: 10,
              //borderWidth: 1,
              borderColor: '#4B9CD3',
              top: "10%",
              width: "19%",
              height: "11%",
              left: "55%",
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
              Submit
          </Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
            style={{
              fontSize: "20%",
              marginRight: "20%",
              marginLeft: "20%",
              marginTop: 10,
              padding: 1,
              backgroundColor: '#4B9CD3',
              borderRadius: 10,
              //borderWidth: 1,
              borderColor: '#4B9CD3',
              top: "10%",
              width: "19%",
              height: "30%",
              right: "10%",
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
              Submit
          </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
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
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
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
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Picture: {
      screen: PictureScreen,
    },
    Edit: {
      screen: EditScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

