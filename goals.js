import React, { Component } from "react";
// import AuthService from "./services/auth.service";

import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput,TouchableWithoutFeedback } from 'react-native';



export default class Homework extends Component {

    //state creation and binding.
    constructor(props) {
        super(props);
        this.showgoals = this.showgoals.bind(this);


        this.state = {
            showgoals:false,
            mainGoals: [{mainGoal: {
                title: "maingoal",
                description: "this is my maingoal",
                date: "",
                complete: false,
                completed: "",
                goals: [
                    {
                        title: "goal",
                        description: "this is a subgoal",
                        date: "",
                        complete: false,
                        completed: "",
    
    
                    },
                    {
                        title: "goals",
                        description: "this is a subgoals",
                        date: "",
                        complete: false,
                        completed: "",
    
    
                    },
                ],
                


            }
            },
            {mainGoal: {
                title: "maingoal2",
                description: "this is my maingoal2",
                date: "",
                complete: false,
                completed: "",
                goals: [
                    {
                        title: "goal",
                        description: "this is a subgoal2",
                        date: "",
                        complete: false,
                        completed: "",
    
    
                    },
                ],
                


            }
            }],

        };
    }
    showgoals(){
        this.setState({
            showgoals:!this.state.showgoals
        })
    }

    render() {
        //login page for the screen. 
        return (
            <View >
                <View style={{zIndex:400,   width:'100%',  position:'absolute', marginTop:20 , display:'flex', justifyContent:'flex-end', flexDirection:"row"  }}>
  <View  style={{zIndex:400, backgroundColor:"gray",  width:40, height:40,  borderRadius: 100 / 2, display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"  }}>
    <Text style={{color:"white"}}>P</Text></View></View>
    {this.state.mainGoals.map((main, index)=>
    <View style={{backgroundColor:"gray", width:"100%"}} onPress={this.showgoals}>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}><Text key={index}>{main.mainGoal.title} </Text><Button title="click me" onPress={this.showgoals}></Button></View>
        {this.state.showgoals?(<View style={{marginLeft:10}}>{main.mainGoal.goals.map((goal, index)=><Text key={index}>{goal.title}</Text>)}</View>):(<View></View>)}
    </View>
    )}
           
            </View>
        );
    }
}
