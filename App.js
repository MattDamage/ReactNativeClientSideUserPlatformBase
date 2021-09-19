import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducers'


import Constants from 'expo-constants';
import firebase from 'firebase/app';
import AuthScreen from './src/screens/auth';
import Route from './src/navigation/Main';

const store = createStore(rootReducer,applyMiddleware(thunk))

if(firebase.apps.length == 0) 
{
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

//AuthScreen
export default function App() {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  );
}
