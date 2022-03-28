import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homework from './homework.js';
import Goals from './goals.js';
import Metro from './metro.js';
import Progress from './progress.js';
import ProfileScreen from './profile.js'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Homework/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Goals/>
    </View>
  );
}
function ProgressScreen() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Progress/>
    </View>
  );
}

function ToolsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Metro/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homework" component={HomeScreen} />
      <Tab.Screen name="Goals" component={SettingsScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Metronome" component={ToolsScreen} />
      <Tab.Screen style={{opacity:0, position:'absolute'}} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
<View style={{zIndex:400,   width:'100%',  position:'absolute', marginTop:20 , display:'flex', justifyContent:'flex-end', flexDirection:"row"  }}>
  <View  style={{zIndex:400, backgroundColor:"gray",  width:40, height:40,  borderRadius: 100 / 2, display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"  }}>
    <Text style={{color:"white"}}>P</Text></View></View>
    
      <MyTabs />
    </NavigationContainer>
  );
}
