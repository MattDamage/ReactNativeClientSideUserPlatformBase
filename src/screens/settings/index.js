import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity }from 'react-native'
import styles from './styles'
import {logout} from '../../redux/actions'

const handleLogout =() => {
    logout()  
}


export default function SettingsScreen() {
    return (
        <View style={styles.container}>
               
                <TouchableOpacity  style={styles.settingsButton}>
                        <Text style={styles.settingsButtonText}>Account Settings</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  style={styles.settingsButton}>
                        <Text style={styles.settingsButtonText}>Privacy Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.settingsButton}>
                        <Text style={styles.settingsButtonText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.settingsButton}>
                        <Text style={styles.settingsButtonText}>Change Email</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.logoutButton} onPress={() =>  handleLogout()}>
                        <Text style={styles.logoutButtonText}>Logout</Text>    
                </TouchableOpacity>

        
    
        </View>
    

    );
}