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

        };
    }
    

    render() {
        //login page for the screen. 
        return (
            <View style={{marginTop:40}}>
                <View style={{marginBottom:40,  alignItems:"center"}}>
           <Circle/>
           <Text >Goal Progress</Text>
           </View>
           <View>
               <View style={{marginBottom:30}}>
           <Bar spGoal={"100"} starpoints={"50"} />
           </View>
           <View style={{marginBottom:30}}>
           <Bar spGoal={"100"} starpoints={"30"} />
           </View>
           <View style={{marginBottom:30}}>
           <Bar spGoal={"100"} starpoints={"40"} />
           </View>
           </View>
            </View>
        );
    }
}
