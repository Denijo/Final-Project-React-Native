import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/index'
export default function App() {
  return (
    <Index/>
  );
}

// var firebaseConfig = {
//   apiKey: "AIzaSyCNbXeCUCEFIxYaL7bwfASLzzW0lebylus",
//   authDomain: "sanberapp-f76cf.firebaseapp.com",
//   projectId: "sanberapp-f76cf",
//   storageBucket: "sanberapp-f76cf.appspot.com",
//   messagingSenderId: "460268798434",
//   appId: "1:460268798434:web:d8f657f7bbfc0d70db79bb",
//   measurementId: "G-B876K8261F"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
