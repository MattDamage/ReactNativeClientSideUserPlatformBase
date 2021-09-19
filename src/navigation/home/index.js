import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {Feather} from '@expo/vector-icons'
import ProfileScreen from '../../screens/profile'

const Tab = createMaterialBottomTabNavigator()   

const EmptyScreen = () => 
{
    return <View></View>
}

export default function HomeScreen() {
    return (
        <Tab.Navigator
        barStyle={{backgroundColor: 'black'}}
        initialRouteName="home">
            <Tab.Screen
                name="profile"
                component={EmptyScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="user" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="test"
                component={EmptyScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="home" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="privacy"
                component={ProfileScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="folder" size={24} color={color}/>
                    )
                }}
            />
           
           
        </Tab.Navigator>
    )
}
