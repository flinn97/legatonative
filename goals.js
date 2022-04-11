import React, { Component } from "react";
// import AuthService from "./services/auth.service";
import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput,TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { debug } from "react-native-reanimated";
import Checkbox from './checkbox1.js'
import Right from './rightarrow.png';
import Down from './downarrow.png'
export default class Homework extends Component {
    //state creation and binding.
    constructor(props) {
        super(props);
        this.showgoals = this.showgoals.bind(this);
        this.state = {
            showgoals:[true, false],
            mainGoals:  this.props.props.props.props.state.student.account[0].mainGoals?  this.props.props.props.props.state.student.account[0].mainGoals:
            [{mainGoal: {
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
    // componentDidMount(){
    //     console.log("we are in goals",)
        
    // }
    /*
    handleChange: function (e) {
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[1]};
    // 3. Replace the property you're intested in
    item.name = 'newName';
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
},
    */
    showgoal = (event, index) =>{
        let showgoals = [ ...this.state.showgoals ];
        showgoals[index] = showgoals[index]
        if(showgoals[index] == true)
        {
            showgoals[index] = false
        }
        else
        {
            showgoals[index] = true
        }
        this.setState({ showgoals });
    }
    addSubGoal(main){
        let newelement = {
            title: "newsubgoal",
            description: "this is a new subgoal",
            date: "",
            complete: false,
            completed: "",
        }
        let maingoal = this.state.mainGoals
    }
    addGoal = () => {
        let newelement = {mainGoal: {
            title: "new goal",
            description: "this is my newgoal",
            date: "",
            complete: false,
            completed: "",
            goals:
            [
                {
                    title: "goal",
                    description: "this is a new subgoal",
                    date: "",
                    complete: false,
                    completed: "",
                },
            ],
        }}
        this.setState(prevState => ({
            mainGoals: [...prevState.mainGoals, newelement],
            showgoals: [...prevState.showgoals, false]
          }))
    }
    finishGoal = () =>
    {
    }
    render() {
        //login page for the screen.
        return (
            <View style={{width:'100%'}} >
                {/* <View style={{zIndex:400,   width:'100%',  position:'absolute', marginTop:20 , display:'flex', justifyContent:'flex-end', flexDirection:"row"  }}>
                    <View  style={{zIndex:400, backgroundColor:"gray",  width:40, height:40,  borderRadius: 100 / 2, display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"  }}>
                        <Text style={{color:"white"}}>P</Text>
                    </View>
                </View> */}
                {this.state.mainGoals.map((main, index)=>
                    <View style={{backgroundColor:"EEEEEE", width:"100%",  }} onPress={this.showgoal}>
                        
                        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={{display:"flex", flexDirection:"row", marginBottom:15}}>
                        <Checkbox size={35} completeGoal={this.props.props.completeGoal} goal={main} main={true}/>
                            <Text key={index} style={{ fontSize:35, textAlign:"center", justifyContent:"space-between"}}>
                                {main.mainGoal.title}
                            </Text>
                            </View>
                            {this.state.showgoals[index]?(
                                <TouchableWithoutFeedback stlye={{height:25}} onPress={(event) => this.showgoal(event, index)}>
                                                                    <Image style={{width:25, height:25, resizeMode: "contain", marginRight:20}} source={Down} />

                            </TouchableWithoutFeedback>
                            
                            ):(
                                <TouchableWithoutFeedback stlye={{height:25}} onPress={(event) => this.showgoal(event, index)}>
                                <Image style={{width:25, height:25, resizeMode: "contain", marginRight:20}} source={Right} />

                            </TouchableWithoutFeedback>
                            )}
                        </View>
                        {this.state.showgoals[index]?(<View style={{marginLeft:10}}>
                            {main.mainGoal.goals.map((goal, index)=>
                            <View style={{display:"flex", flexDirection:"row", marginBottom:15}}>
                                <Checkbox size={25} completeGoal={this.props.props.completeGoal} goal={goal} main={false}/>
                                <Text key={index} style={{
                                      fontSize:25,}}>{goal.title}</Text></View>)}</View>):(<View></View>)}
                    </View>
                )}
            
            </View>
        );
    }
}