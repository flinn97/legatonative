import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import Checkbox from 'react-native-custom-checkbox';
export default class Check extends Component {
    constructor(props) {
        super(props);
        this.handlechange = this.handlechange.bind(this);
    this.state = {
       
        p: this.props.flag
    }
}


    handlechange(){
        console.log(this.state)
        this.setState({
            p:!this.state.p
        })
    }
    componentDidMount(){
        console.log("props", this.props)

    }

    render() {
        return (
            <View  >
            


 <View  >

                        <View   style={{display:"flex", alignItems:"center", }}>
                        <Checkbox
    checked={this.state.p}  size={50}
    style={{backgroundColor: '#f2f2f2', color:'#7A9B76', borderRadius: 5}} onChange={this.handlechange }
    />
                            <View  style={{position:"absolute"}}
                            // onClick={this.markcheckbox}
                            >
                                 
                                {/* {this.props.day ? ( */}
                                <View >
                                    {this.state.p ? (
                                        <View >


                                            <View  style={{...styles.csyncbox, alignItems:"flex-start"}}>
                                            {this.props.day==="s"?(<Text style={{ position: "absolute", marginLeft: -3, marginTop: -3, fontSize: 13 }}>S</Text>):(<Text style={{ position: "absolute", marginLeft: -19, marginTop: 3, fontSize: 13 }}>{this.props.day}</Text>)}
                                            {/* <View style={{display:"flex", alignItems:"center",  }} >
                                                <Text style={{ position: "absolute",fontSize:"30pt", marginTop:10 }}>{this.props.day}</Text>
                                                </View> */}
                                                
                                                {/* <View style={{ opacity: "0" }}>
                                                    {this.props.day === "M" ?
                                                        (<Text style={{ marginLeft: -1, marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                        : (<View> {this.props.day === "W" ? (<Text style={{ marginLeft: -1, marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                            : (
                                                                <View>

{this.props.day==="s"?(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</Text>):(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</Text>)}

                                                                </View>
                                                            )}</View>)}
                                                </View> */}
                                            </View>



                                        </View>


                                    ) : (
                                            <View style={styles.csyncbox}>
                                                {this.props.day==="s"?(<Text style={{ position: "absolute", marginLeft: -3, marginTop: -3, fontSize: 13, opacity: 0 }}>S</Text>)
                                                :(
                                                <Text style={{ position: "absolute", marginLeft: -3, marginTop: -3, fontSize: 13, opacity: 0 }}>{this.props.day}</Text>)}


                                                                                  
                                                <View style={{display:"flex", alignItems:"center",fontSize:30 }} >
                                                <TouchableWithoutFeedback onPress={this.handlechange}>
                                                <Text style={{ position: "absolute",fontSize:30, marginTop:10 }}>{this.props.day}</Text>
                                                </TouchableWithoutFeedback>
                                                    {/* {this.props.day === "M" ?
                                                        (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                        : (<View> {this.props.day === "W" ? (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                            : (<View>
                                                                {this.props.day==="s"?(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</Text>):(
                                                                <Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</Text>)}


                                                             
                                                            </View>
                                                            
                                                            
                                                            
                                                            )}</View>)} */}
                                                </View>
                                            </View>
                                               

                                        )}
                                </View>
                                {/* ) : (<View style={{ opacity: "0" }}>


                                    <View className="csyncboxa" style={{ opacity: "0" }}>
                                    {this.props.day==="s"?(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</Text>):(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</Text>)}


                                        
                                        <View style={{ opacity: "0" }}>
                                            {this.props.day === "M" ?
                                                (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                : (<View> {this.props.day === "W" ? (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                    : (<View>
                                                    {this.props.day==="s"?(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</Text>):(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</Text>)}
                                                    </View>)}</View>)}
                                        </View>
                                    </View>



                                </View>)} */}

{/* 


                                <View className="tick"></View> */}
                            </View>
                                {/* <View style={{ marginLeft: "10px" }}>
                                {this.props.props.synctimes ? (<View>{this.props.time ? (<View style={{fontSize:"14px"}}><Text>{this.props.time} m</Text></View>) : (<View style={{fontSize:"14px"}}><Text>0 m</Text></View>)}</View>) : (<View></View>)}
                            </View> */}
                            
                            
                            
                            </View>
                    </View> 
                    </View>

)
}
} 
const styles = StyleSheet.create({
    progressBar: {
        height: 20,
        flexDirection: "row",
        width: '100%',
        backgroundColor: '#C8CAE4',
        // borderColor: '#000',
        // borderWidth: 2,
        borderRadius: 20
      },
      overlay:{
        ...StyleSheet.absoluteFill, 
      },
      csyncbox: {
        zIndex: 100,
        position: "relative",
        
    }

  });
