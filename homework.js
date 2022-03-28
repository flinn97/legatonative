import React, { Component } from "react";
// import AuthService from "./services/auth.service";

import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import Checkboxnum2 from "./practice"

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
        ],
        syncedCheckboxes: {
            mon: false,
            tues: false,
            wed: false,
            thur: false,
            fri: false,
            sat: false,
            sun: false,
        },
        checked: 0
    
        };
    }
    

    render() {
        //login page for the screen. 
        return (
            // <div >
            //                         <div className="fill1" >
            //                     <div className="fill2 centerized" style={{ marginBottom: "5px" }}><h2>Homework</h2></div>
            //                     <div className=" fill2">
            //                         {this.state.currentStudent ? (<div className="checkboxstuff centerized fill2">

            //                             <div className="fill2">{this.state.realtimeusr ? (
            //                                 <div className="checkboxstuff1 fill2 " style={{ marginBottom: "10px", flexDirection: "column" }}>

            //                                     {this.state.realtimeusr.timeday ? (
            //                                         <div className=" centerized">
            //                                             {!this.state.c ? (
            //                                                 <div className=" centerized" style={{marginRight:"5px"}}>
            //                                                     <div className="checkboxstuff1 centerized" style={{fontSize:"13px"}}>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Mon</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.mon} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Tues</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.tues} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Wed</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.wed} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Thurs</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.thur} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Fri</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.fri} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Sat</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.sat} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "15px" }}>
            //                                                             <div className=" centerized">Sun</div>
            //                                                             <div className=" centerized">{this.state.realtimeusr.hwtime.sun} M</div>
            //                                                         </div>
            //                                                         <div style={{ flexDirection: "column", marginRight: "0px" }}>
            //                                                             <div className=" centerized">Total</div>
            //                                                             <div className=" centerized"> {parseInt(this.state.realtimeusr.hwtime.mon) + parseInt(this.state.realtimeusr.hwtime.tues) + parseInt(this.state.realtimeusr.hwtime.wed) + parseInt(this.state.realtimeusr.hwtime.thur) + parseInt(this.state.realtimeusr.hwtime.fri) + parseInt(this.state.realtimeusr.hwtime.sat) + parseInt(this.state.realtimeusr.hwtime.sun) } M</div>
            //                                                         </div>

            //                                                     </div>

            //                                                 </div>



            //                                             ) : (<div>


            //                                             </div>)}

            //                                         </div>

            //                                     ) : (
            //                                             <div className="centerized">
            //                                                 {this.state.realtimeusr.edityesnoWeek ? (<div className="centerized">
            //                                                     {!this.state.c ? (<h6>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </h6>) : (
            //                                                         <div>
            //                                                         </div>

            //                                                     )
            //                                                     }
            //                                                 </div>



            //                                                 ) : (<div>


            //                                                 </div>)}




            //                                             </div>)}

            //                                     <div className="checkboxstuff1a centerized" >

            //                                         {this.state.realtimeusr.syncedCheckbox ? (<Checkboxnum2 checkboxes={7} prac={this.state.currentStudent.checked} practice={this.practice} synced={true} sync={this.state.currentStudent.syncedCheckboxes} times={this.state.realtimeusr.hwtime} synctimes={this.state.currentStudent.timeday} />
            //                                         ) : (

            //                                                 <Checkboxnum checkboxes={this.state.realtimeusr.checkboxes} prac={this.state.realtimeusr.checked} practice={this.practice} times={this.state.realtimeusr.hwtime} synctimes={this.state.realtimeusr.timeday} />
            //                                             )}
            //                                     </div>

            //                                 </div>
            //                             ) : (<div></div>)}


            //                             </div>




            //                         </div>) : (<div></div>)}
            //                         {this.state.t ? (
            //                             <div className="fill2 centerized">
            //                                 <div style={{ width: "125px", height: "40px", marginTop: "5px", marginBottom: "7px" }} ><button style={{ height: "30px", background: "#696eb5", color: "#F0F2EF" }} className="btn btn-block centerized" onClick={this.handletimesOpen}>Submit Time</button></div>
            //                             </div>
            //                         ) : (<div></div>)}
                                   

            //                         <div className=" fill2">
            //                             <table className="fill2" >
            //                                 <tr className="fill2">
                                                
            //                                     <div className="centerized fill2" style={{ height: "200px", marginBottom: "15px" }}>
            //                                         <td style={{ width: "75%", height: "100%", border: "2px solid green", borderRadius:"3%" }}>
            //                                             <div style={{ width: "100%", height: "98%",  }}>
            //                                                 {this.state.homeworks[0] ? (<div className="homeworkScroll1" style={{ width: "100%", marginTop:"6px"}} >
            //                                             {
            //                                                 this.state.homeworks.map((homework, index) =>

            //                                                     <div className="checkboxstuff1  rowss" key={index} style={{marginBottom:"7px"}}>
            //                                                         <div><img src={leaf} style={{ width: "22px", hieght: "22px", marginRight: "10px", marginLeft: "5px" }} /></div>
            //                                                         <div className="huv checkboxstuff2 " onClick={this.showHomework.bind(this, homework)}>{homework.title}</div>

                                                                    
            //                                                     </div>

            //                                                 )
            //                                     }

            //                                         </div>) : (
            //                                                     <div>No Homework assigned yet!</div>)}
            //                                         </div>
            //                                                 </td>
                                                        
                                                  
            //                                     </div>
            //                                 </tr>
            //                                 </table>
            //                         </div>
                                    
                            

                                    
                                   

                                   
                                    
                                            

            //                             </div>
            //                             {this.state.realtimeusr?(<div>
            //                                 {this.state.realtimeusr.edityesnoWeek ? (<div style={{marginLeft:"15px"}}>
            //                                                     {this.state.c ? (<p>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </p>) : (
            //                                                         <div>
            //                                                             {this.state.realtimeusr.timeday?(
            //                                                                 <div style={{marginLeft:"15px"}}>
            //                                                                     <p>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </p>
            //                                                                 </div>
            //                                                             ):(<div></div>)}
            //                                                         </div>

            //                                                     )
            //                                                     }
            //                                                 </div>



            //                                                 ) : (<div>


            //                                                 </div>)}


            //                             </div>):(<div></div>)}
                                        
                                       





            //                     </div>
            //         </div>
            <View style={{ flex: 1, alignItems: 'center', marginTop:60, justifyContent:"space-between" }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize:20 }}>Homework Assignments</Text>
                <View style={{ marginTop:40 }}>
                 {this.state.homeworks.map((homework, index)=><View><Text style={{fontSize:18, marginTop:5}} key={index}>{homework.title}</Text></View>)}
                 </View>
                 </View>
                 <View  style={{marginBottom:50}}>
            <View  style={{display:"flex", flexDirection:"row", marginBottom:70}}>
                <Checkboxnum2 checkboxes={7} prac={this.state.checked} practice={this.practice} synced={true} sync={this.state.syncedCheckboxes} 
                times={this.state.hwtime} synctimes={this.state.timeday} />
                
            </View>
            <Button title="log time"></Button>
            </View>
            </View>
        );
        
    }
}
