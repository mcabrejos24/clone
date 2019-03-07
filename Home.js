import React from 'react'
import { TouchableOpacity, Button, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Ionicons } from '@expo/vector-icons';

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

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerBackTitle: 'Home',
      headerLeft: (
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile')}
          style = {{
            fontSize: 32,
            marginLeft: 10,
          }}
        >
          <FontAwesomeIcon 
            icon={ faUserCircle } size={25} style={{ width: 24, height: 24, margin: 5 }}
          />
          {/* <Ionicons style={{ width: 24, height: 24, margin: 5 }} name={'ios-home'} size={30} color={'#4B9CD3'} /> */}
        </TouchableOpacity>
      ),
    };
  };

ComponentDidMount() {
  this.props.navigation.navigate('Profile');
}

_increaseCount = () => {
  this.navigation.navigate('Profile')
}

_navigateTo = destinationScreen => {
  this.props.navigation.navigate(destinationScreen);
}


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <FontAwesomeIcon icon={ faCoffee } /> */}
        <Text>Home Screen</Text>
        <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
        <Button
          title="Go to Notifications"
          onPress={() => this.props.navigation.navigate('Notifications')}
        />
      </View>
    );
  }
}

// export const Home = (props) => {
//     return (
//       <View>
//           <Profile />
//           <NewStatus />
//           <Posts />
//           <Navbar />
//       </View>
//     )
//   }


//   const NewStatus = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  
//   const Posts = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  
//   const Navbar = (props) => {
//     return (
//       <View style={newStatStyle.container}>
//         <Text>+</Text>
//       </View>
//     )
//   }
  

//     const newStatStyle = StyleSheet.create({
//     container: {
//       backgroundColor: 'green',
//       display: 'flex',
//       justifyContent: 'flex-start',
      
//     },
//   }); 
