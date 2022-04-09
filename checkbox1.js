import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import Checkbox from 'react-native-custom-checkbox';
export default class Check extends Component {
    constructor(props) {
        super(props);
        this.handlechange = this.handlechange.bind(this);
    this.state = {
       
        p: false
    }
}


    handlechange(){
        // console.log(this.state)
        this.setState({
            p:!this.state.p
        })
    }
    

    render() {
        return (
            <View  >
                <View>
                    <View   style={{display:"flex", alignItems:"center", }}>
                        <Checkbox checked={this.state.p}  size={this.props.size} style={{backgroundColor: '#f2f2f2', color:'#7A9B76', borderRadius: 5}} onChange={this.handlechange }/>
                            <View  style={{position:"absolute"}}>
                                <View >
                                            <View style={styles.csyncbox}>                              
                                                <View style={{display:"flex", alignItems:"center",fontSize:30 }} >
                                                {/* <TouchableWithoutFeedback onPress={this.handlechange}>
                                                </TouchableWithoutFeedback> */}
                                                </View>
                                            </View>                                        
                                </View>
                            </View>
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
