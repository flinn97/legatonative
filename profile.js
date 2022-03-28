import React, { Component } from "react";
import Circle from "./progressCircle.js";
// import AuthService from "./services/auth.service";

import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput,} from 'react-native';

import Bar from "./progressbar.js"

export default class Homework extends Component {

    //state creation and binding.
    constructor(props) {
        super(props);
       

        this.state = {
            picture: "avatar_2x.png"
        };
    }
    

    render() {
        //login page for the screen. 
        return (
            <View style={{flex:1, justifyContent:"center", alignSelf:"center", }}>
                <Image source={{uri: '//ssl.gstatic.com/accounts/ui/avatar_2x.png'}} style={{backgroundColor:"blue"}}/>
                 <SafeAreaView>
          <TextInput
          style={{width: 200, fontSize: 25, backgroundColor:"white", margin:20}}
          onChangeText={this.handleChanges}
          value="Name"
          keyboardType="numeric"/>
                </SafeAreaView>
                <SafeAreaView>
          <TextInput
          style={{width: 200, fontSize: 25, backgroundColor:"white", margin:20}}
          onChangeText={this.handleChanges}
          value="Email"
          keyboardType="numeric"/>
                </SafeAreaView>
                <SafeAreaView>
          <TextInput
          style={{width: 200, fontSize: 25, backgroundColor:"white", margin:20}}
          onChangeText={this.handleChanges}
          value="Teacher"
          keyboardType="numeric"/>
                </SafeAreaView>
                
            </View>
        );
    }
}