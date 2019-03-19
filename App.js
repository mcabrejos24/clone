import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Svg } from 'expo'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import { HomeStack } from './Home.js'
import { ProfileScreen } from './Profile.js'
import { SearchScreen } from './Search.js'
import { ChatScreen } from './Chat.js'
import { NotificationsScreen } from './Notifications.js'



class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const NotificationIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const ChatIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={2} />;
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'ios-home';
  } else if (routeName === 'Search') {
      iconName = `ios-search`;
  } else if (routeName === 'Chat') {
      iconName = 'ios-chatbubbles'
      IconComponent = ChatIconWithBadge;
  } else if (routeName === 'Notifications') {
      iconName = `ios-notifications${focused ? '' : '-outline'}`;
      // We want to add badges to home tab icon
      IconComponent = NotificationIconWithBadge;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};



// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//     Search: SearchScreen,
//     Chat: ChatScreen,
//     Notifications: NotificationsScreen
//   },
//   {
//     initialRouteName: "Home"
//   }
// );




//export default createAppContainer(AppNavigator);
const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    //Profile: ProfileScreen,
    Search: SearchScreen,
    Chat: ChatScreen,
    Notifications: NotificationsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#4B9CD3',
      inactiveTintColor: 'grey',
    },
  }

);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}