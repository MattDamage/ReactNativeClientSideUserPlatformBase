import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

import { Feather } from '@expo/vector-icons'; 

//
//{authPage,setAuthPage,detailsPage,setDetailsPage}
export default function AuthUpdate({settingsPage,setSettingsPage,updatePage,setUpdatePage}) {  
    return (
        <View style={styles.container}>
            
            <View styles={styles.containerMain}>
                <Text style={styles.headerText}>{settingsPage ==0 ? 'sign in' : 'sign up'}</Text>
                <TouchableOpacity style={styles.providerButton}
                onPress={()=> setDetailsPage(true)}> 
                    
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.providerButtonText}>Use Email</Text>
                    <View />
                </TouchableOpacity>
            </View>   
                <TouchableOpacity style={styles.containerBottomButton}
                    onPress={() => settingsPage == 0 ? setSettingsPage(1): setSettingsPage(0)}>     
                    {settingsPage==0 ?
                        <Text>Change {"\n"} <Text style={styles.bottomButtonText}>Email</Text> </Text>
                        :
                        <Text>Change{"\n"}<Text style={styles.bottomButtonText}>Password</Text> </Text>
                    }
                </TouchableOpacity>
        </View>
    )  
}