import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Alert,Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import ShareItScreen from './ShareItScreen';

import db from '../config';

export default class welcomeScreen extends Component {
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }

    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate('ShareItScreen');
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
    }

    userSignUp = (emailId, password) =>{
      
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          
         alert("Successfully Added")
        }

render(){
    return(
        <View>
        <Text>Welcome Screen</Text>
        <TextInput placeholder= "example@booksanta.com" 
        style={styles.loginBox}
        placeholderTextColor = "#ffff"
        keyboardType ='email-address'
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
        ></TextInput>
         <TextInput placeholder= "Password" 
      style={styles.loginBox}
      placeholderTextColor = "#ffff"
      secureTextEntry = {true}
      onChangeText={(text)=>{
        this.setState({
          password: text
        })
      }}
      ></TextInput>
        <TouchableOpacity
      style={[styles.button,{marginBottom:20, marginTop:20}]}
      onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
      >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
      style={[styles.button,{marginBottom:20, marginTop:20}]}
      onPress={()=>this.userSignUp(this.state.emailId, this.state.password)}
      >
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      

        </View>
    )
}

}