import React, { Component } from "react";
// import AuthService from "./services/auth.service";

import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';



export default class Homework extends Component {

    //state creation and binding.
    constructor(props) {
        super(props);
       

        this.state = {

        };
    }
    

    render() {
        //login page for the screen. 
        return (
            <View >
                <View style={{zIndex:400,   width:'100%',  position:'absolute', marginTop:20 , display:'flex', justifyContent:'flex-end', flexDirection:"row"  }}>
  <View  style={{zIndex:400, backgroundColor:"gray",  width:40, height:40,  borderRadius: 100 / 2, display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"  }}>
    <Text style={{color:"white"}}>P</Text></View></View>
           <Text>goals</Text>
           
            </View>
        );
    }
}