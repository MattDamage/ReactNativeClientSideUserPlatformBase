
import * as GoogleAuthentication from 'expo-google-app-auth';
import firebase from "firebase"

require('firebase/firebase-auth')

import {USER_STATE_CHANGE} from '../constants'

export const userAuthStateListener = () => dispatch => 
{
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            //dispatch(getCurrentUserData())
        } else {
            dispatch({type: USER_STATE_CHANGE,currentUser: null,loaded: true})
        }
    })  
}

//add 'dispatch' => if it breaks 
export const getCurrentUserData = () => {
    firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot((res) => {
            if(res.exists){
                return dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: res.data(),
                    loaded:true
                })
            }
        })
}
//,fname,lname
export const writeUserData = (email) => {
    console.log('write user data called: ' + email)
    /*
    firebase.database().ref('Users/').set({
        email
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
       // resolve()
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
       // reject()
    })
    */

    firebase.database().ref('UsersList/').push({
        email
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
    
    
}

export const login = (email,password) => dispatch => new Promise((resolve,reject) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() => {
        resolve()
    })
    .catch(() => {
        reject()
    })
})
export const register = (email,password) => dispatch => new Promise((resolve,reject) => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(() => {
        resolve()
    })
    .catch(() => {
        reject()
    })
})
