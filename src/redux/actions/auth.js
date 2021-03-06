
import * as GoogleAuthentication from 'expo-google-app-auth';
import firebase from "firebase"

require('firebase/firebase-auth')

import {USER_STATE_CHANGE} from '../constants'

export const userAuthStateListener = () => dispatch => 
{
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            console.log("UserAuthState user ")
           //dispatch(getCurrentUserData())
           dispatch({type: USER_STATE_CHANGE,currentUser: null,loaded: true})
        } else {
            console.log("UserAuthState else ")
            dispatch({type: USER_STATE_CHANGE,currentUser: null,loaded: false}) // set to true if is breaks?
        }
    })  
}
//This is where we should load the userObject
export const getCurrentUserData = () => {
     /*
    UserID = firebase.auth().currentUser.uid
   /// console.log("getCurrentUserData was called with UID: " + UserID)
    Console
    
    firebase.database()
        .ref('UsersList/' + UserID)
        .once('email')
        .then(snapshot => {
            console.log('User email: ', snapshot.val());
          });
   
  .then(snapshot => {
            console.log('User email: ', snapshot.val());
          });
    
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
        */
}
//,fname,lname, This is where data is written to the firebase database
export const writeUserData = (email) => {
    console.log('write user data called: ' + email)

    UserID = firebase.auth().currentUser.uid
    firebase.database().ref('UsersList/' + UserID ).set({
    //firebase.database().ref('Test/test').set({   
        email
    }).then((data)=>{
        console.log('data was written ' , data)
    }).catch((error)=>{
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
export const logout = () => 
{
    firebase.auth().signOut()
    .then(() => 
    {
        console.log("Sign-out successful")
    })
    .catch((error) => {
        console.log("There was an error during the sign-out process")
    });
}
export const updateEmail = (email,currentPassword,newEmail) => 
{
    firebase.auth()
    .signInWithEmailAndPassword(email, currentPassword)
    .then(function(userCredential) {
        userCredential.user.updateEmail(newEmail)
    })
    .catch((error) => {
        console.log("There was an error updating the users email")
    });

}
export const updatePassword = (email,currentPassword,newPassword) => 
{
    firebase.auth()
    .signInWithEmailAndPassword(email, currentPassword)
    .then(function(userCredential) {
        userCredential.user.updateEmail(newPassword)
    })
    .catch((error) => {
        console.log("There was an error updating the users password")
    });

}
export const updateUserData = (email) => {
    console.log('write user data called: ' + email)

    UserID = firebase.auth().currentUser.uid
    firebase.database().ref('UsersList/' + UserID ).set({
    //firebase.database().ref('Test/test').set({   
        email
    }).then((data)=>{
        console.log('data was written ' , data)
    }).catch((error)=>{
        console.log('error ' , error)
    })   
}