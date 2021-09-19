import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import {useDispatch, useSelector } from 'react-redux'
//import { userAuthStateListener } from '../../redux/actions'
import { userAuthStateListener } from '../../redux/actions'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../../screens/auth'
import HomeScreen from '../home'

const Stack = createNativeStackNavigator()

export default function Route() {
    const currentUserObj = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(userAuthStateListener());
    }, [])
/*
    if(!currentUserObj.loaded) 
    {
        return (
            <View></View>
        )
    }
*/
    console.log(currentUserObj)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {currentUserObj.currentUser == null ?
                <Stack.Screen name = "auth" component={AuthScreen} options={{headerShown: false}}/>         
                : 
                <Stack.Screen name = "home" component={HomeScreen} options={{headerShown: false}}/>        
                }
            </Stack.Navigator> 
        </NavigationContainer>
    )
}
