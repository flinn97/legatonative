import React, { Component } from "react";
// import AuthService from "./services/auth.service";

import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';



export default class Homework extends Component {

    //state creation and binding.
    constructor(props) {
        super(props);
       

        this.state = {
            homeworks: [{
                title: "homework"
            },
            {
                title: "homework2"
            },
        ]
        };
    }
    

    render() {
        //login page for the screen. 
        return (
            <View >
           <Text>hw</Text>
            </View>
        );
    }
}
