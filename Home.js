import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Profile } from './Profile.js'


export const Home = (props) => {
    return (
      <View>
          <Profile />
          <NewStatus />
          <Posts />
          <Navbar />
      </View>
    )
  }


  const NewStatus = (props) => {
    return (
      <View style={newStatStyle.container}>
        <Text>+</Text>
      </View>
    )
  }
  
  const Posts = (props) => {
    return (
      <View style={newStatStyle.container}>
        <Text>+</Text>
      </View>
    )
  }
  
  const Navbar = (props) => {
    return (
      <View style={newStatStyle.container}>
        <Text>+</Text>
      </View>
    )
  }
  

    const newStatStyle = StyleSheet.create({
    container: {
      backgroundColor: 'green',
      display: 'flex',
      justifyContent: 'flex-start',
      
    },
  }); 
