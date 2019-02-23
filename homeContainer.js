
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer,createBottomTabNavigator,createNavigationContainer,createMaterialTopTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ScreenOne from './stackscreens/Screen1';
import ScreenTwo from './stackscreens/Screen2';
import ScreenThree from './stackscreens/Screen3';
//routes

const HomeCapsule = createBottomTabNavigator({
    
    ScreenOne : {
        screen : ScreenOne,
        defaultNavigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '第一',
            headerStyle: {
                backgroundColor: 'red',
                title:'nihao',
                headerTitle:'nihao',
                header:'nihao'
            },
        }),
    },
    ScreenTwoPage : {
        screen : ScreenTwo,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '第二',
            headerStyle: {
                backgroundColor: 'red',
            },
        }),
    },
    ScreenThree : {
        screen : ScreenThree,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '第三',
            headerStyle: {
                backgroundColor: 'red',
            },
        }),
    }
},
    // {
    //     navigationOptions: ({navigation}) => NavigatorOptions(navigation)
    // }

);

const NavigatorOptions = (navigation) => {
    const routes = navigation.state.routes;
    // 通过params得到传进来的title，并赋值给headerTitle。
    const params = routes ? routes[navigation.state.index].params : null;
    const headerTitle = params ? params.title : '';
    const headerTitleStyle = {
        fontSize:  Platform.ios?20:18,
        color: 'white',
        flex: 1,
        textAlign: 'center',
        paddingTop: Platform.Android ? 17 : null,
    };
    const headerBackTitle = null;
    const headerTintColor = 'white';
    const headerStyle = {
        backgroundColor: 'red',
        shadowColor: 'transparent',
        shadowOpacity: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
    };
    const header = null;
    return { headerTitle, headerStyle, headerTitleStyle, headerBackTitle, headerTintColor, header };
};

// const HomeContainer = createBottomTabNavigator(HomeCapsule)

//
// HomeContainer.navigationOptions = ({navigation}) => {
//     const component = HomeCapsule.router.getComponentForState(navigation.state)
//     if (typeof component.navigationOptions === 'function'){
//         return component.navigationOptions({navigation})
//     }
//     return component.navigationOptions
// }

export default HomeCapsule;