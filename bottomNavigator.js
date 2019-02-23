
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import OrdersPage from './screens/ordersPage';
import ProfilePage from './screens/profilePage';
import HomeContainer from './homeContainer';

import ScreenOne from './stackscreens/Screen1';
import ScreenTwo from './stackscreens/Screen2';
import ScreenThree from './stackscreens/Screen3';


const BottomTabNavigator1 = createStackNavigator({

    HomeContainer : {
        screen : HomeContainer,
        // navigationOptions: {
        //     header: null
        // }
    },
    OrdersPage : {
        screen : OrdersPage
    },
    ProfilePage : {
        screen : ProfilePage
    },
},
    // {
    //     initialRouteName: 'HomeContainer',
    // }

);

const BottomTabNavigator = createAppContainer(BottomTabNavigator1)

export default BottomTabNavigator;