import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/home"
import Details from "./Screens/details"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default function App() {
  return (
    <Hello>

    </Hello>
    );
}

const stack = createStackNavigator({
  Home: {screen: Home, navigationOptions: {headerShown:false}},
  Details: {screen:Details}
}, 
{initialRouteName:"Home"}
)
const Hello = createAppContainer(
  stack
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyontent: 'center',
  },
});
