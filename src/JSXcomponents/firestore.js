import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBw7e90_S4gb_z-1cAOT5Zo20CxqAPyvao",
    authDomain: "githubjobs-793ea.firebaseapp.com",
    databaseURL: "https://githubjobs-793ea.firebaseio.com",
    projectId: "githubjobs-793ea",
    storageBucket: "githubjobs-793ea.appspot.com",
    messagingSenderId: "567440603118",
    appId: "1:567440603118:web:701111224ace271bfc40ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth

//   auth().onAuthStateChanged(function(user) {
//       console.log(user)
//   })

  //creating a google login

  export const googleLogin = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.setCustomParameters({prompt: "select_account"});
  return firebase.auth().signInWithPopup(googleProvider).then(()=> console.log("I have logged in"))
  }

  export const signOut = () => {
      return firebase.auth().signOut().then(res => console.log("You Have Signed Out"))
  }

//  export const signOut = () => {auth().signOut().then(() => {
//     console.log("Signed Out")
//  })
// }

