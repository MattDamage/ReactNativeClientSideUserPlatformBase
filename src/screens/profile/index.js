import React from 'react'
import {Text, SafeAreaView, ScrollView, TouchableOpacity }from 'react-native'
import styles from './styles'
import {logout} from '../../redux/actions'
import SettingsScreen from '../../screens/settings'

const handleLogout =() => {
    logout()  
}


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.mainBodyText} >About</Text>
            <Text style={styles.mainBodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <TouchableOpacity  style={styles.logoutButton} onPress={() =>  handleLogout()}>
                    <Text>Logout</Text>
                    
                </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
}