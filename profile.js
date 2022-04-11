import React, { Component } from "react";
// import AuthService from "./services/auth.service";
import { Button, Text, View, Image, SafeAreaView, StyleSheet, TextInput,} from 'react-native';
import avatar from "./avatar_2x.png";
import editImg from "./edit.png";

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
            <View style={styles.mainContainer}>
              <View style={styles.imgContainer}><Image source={avatar} style={styles.img}/></View>
               <SafeAreaView>
                <Text style={styles.label}>Username</Text>
                <TextInput
                style={styles.textInput1}
                onChangeText={this.handleChanges}
                value="GenericMan"
                keyboardType="numeric"/>
                      </SafeAreaView>
                      <SafeAreaView>
                <Text style={styles.label}>Name</Text>
                <View style={styles.txtImgContainer}>
                  <TextInput
                  style={styles.textInput2}
                  onChangeText={this.handleChanges}
                  value="New Guy"
                  keyboardType="numeric"/>
                  <Image source={editImg}/>
                </View>
                      </SafeAreaView>
                      <SafeAreaView>
                <Text style={styles.label}>Email</Text>
                <View style={styles.txtImgContainer}>
                  <TextInput
                  style={styles.textInput2}
                  onChangeText={this.handleChanges}
                  value="newguy@gmail.com"
                  keyboardType="numeric"/>
                  <Image source={editImg}/>
                </View>
                <Text style={styles.label}>Teacher Name</Text>
                <TextInput
                style={styles.textInput1}
                onChangeText={this.handleChanges}
                value="Alan Davidson"
                keyboardType="numeric"/>
              </SafeAreaView>
              <View style={styles.buttonContainer}>
                <Button color="#696EB5" title="Go To Teacher Page"/>
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 40,
    marginRight: 40
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  img: {
    borderRadius: 20
  },
  label: {
    width: 200,
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 10
  },
  textInput1: {
    fontSize: 18,
    backgroundColor:"white",
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10
  },
  textInput2: {
    flex: 5,
    marginRight: 10,
    fontSize: 18,
    backgroundColor:"white",
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10
  },
  txtImgContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
