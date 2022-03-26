import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Checkbox extends Component {


    state = {
        

    }

    render() {
        return (
            

<View >
                        <View >
                        </View>
                        <View>
                            <input type="checkbox" checked={this.state.checkboxValue} />
                            <label className="change-label2a huv" onClick={this.markcheckbox}>
                                {this.props.day ? (<View>
                                    {this.state.p ? (
                                        <View>


                                            <View className="csyncbox">
                                            {this.props.day==="s"?(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</Text>):(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</Text>)}

                                                
                                                <View style={{ opacity: "0" }}>
                                                    {this.props.day === "M" ?
                                                        (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                        : (<View> {this.props.day === "W" ? (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                            : (
                                                                <View>

{this.props.day==="s"?(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</Text>):(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</Text>)}

                                                                </View>
                                                            )}</View>)}
                                                </View>
                                            </View>



                                        </View>


                                    ) : (
                                            <View className="csyncbox">
                                                                                            {this.props.day==="s"?(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>S</Text>):(<Text style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</Text>)}


                                                                                           
                                                <View >
                                                    {this.props.day === "M" ?
                                                        (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                        : (<View> {this.props.day === "W" ? (<Text style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</Text>)
                                                            : (<View>
                                                                {this.props.day==="s"?(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</Text>):(<Text style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</Text>)}


                                                             
                                                            </View>
                                                            
                                                            
                                                            
                                                            )}</View>)}
                                                </View>
                                            </View>

                                        )}
                                </View>) : (<View style={{ opacity: "0" }}>


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



                                </View>)}




                                <View className="tick"></View>
                            </label>

                           

                                       


                                 
                            {this.state.tooSmall?(
                                <View style={{ marginLeft: "10px" }}>
                                {this.props.props.synctimes ? (<View>{this.props.time ? (<View style={{fontSize:"12px"}}><b>{this.props.time} m</b></View>) : (<View style={{fontSize:"12px"}}><Text>0 m</Text></View>)}</View>) : (<View></View>)}
                            </View>
                            ):(
                                <View style={{ marginLeft: "10px" }}>
                                {this.props.props.synctimes ? (<View>{this.props.time ? (<View style={{fontSize:"14px"}}><b>{this.props.time} m</b></View>) : (<View style={{fontSize:"14px"}}><Text>0 m</Text></View>)}</View>) : (<View></View>)}
                            </View>
                            )}
                            
                            
                            </View>
                    </View>
                                
        )
    }
} 