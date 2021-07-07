import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Header,Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import welcomeScreen from './Screens/welcomeScreen';
import ShareItScreen from './Screens/ShareItScreen';

export default class App extends Component {
  render(){
  return (
    <View>
    <AppContainer/>
     </View>
         );
  }
}

const switchNavigator = createSwitchNavigator({
  welcomeScreen: {screen:welcomeScreen},
  ShareItScreen: {screen:ShareItScreen}
})

const AppContainer = createAppContainer(switchNavigator);