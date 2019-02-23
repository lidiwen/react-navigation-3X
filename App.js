
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeContainer from './homeContainer';
import SecondPage from './SecondPage';
import BottomNavigator from './bottomNavigator';
//routes
import BottomTabNavigator from './bottomNavigator';

export default class App extends Component{
  render(){
    return(
      <BottomNavigator/>
    )
  }
}