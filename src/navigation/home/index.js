import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {Feather} from '@expo/vector-icons'
import ProfileScreen from '../../screens/profile'
import SettingsScreen from '../../screens/settings'

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
                name="menu"
                component={SettingsScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="menu" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="home"
                component={EmptyScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="home" size={24} color={color}/>
                    )
                }}
            />
             <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="user" size={24} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}