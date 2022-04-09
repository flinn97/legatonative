import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homework from './homework.js';
import Goals from './goals.js';
import Metro from './metro.js';
import Progress from './progress.js';
import ProfileScreen from './profile.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons, Foundation  } from "@expo/vector-icons";

function HomeScreen(props) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Homework props={props}/>
    </View>
  );
}

function SettingsScreen(props) {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Goals props={props}/>
    </View>
  );
}
function ProgressScreen(props) {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Progress props={props}/>
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

function MyTabs(props) {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: '#7A9B76',
      inactiveBackgroundColor: '#7A9B76',
      
      
          // style: {
          //       backgroundColor: '#7A9B76',
          //       paddingBottom: 3
          // }
   }
  }
   >

      <Tab.Screen name="Homework" 
      children={()=><HomeScreen props={props}/>}
      // component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#7A9B76',
          },
          headerTintColor: '#fff',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color="white"
              />
            );
          },

        }} 
        />
      <Tab.Screen name="Goals" 
      children={()=><SettingsScreen props={props}/>}
      // component={SettingsScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#7A9B76',
        },
        headerTintColor: '#fff',
        tabBarIcon: (tabInfo) => {
          return (
            <Foundation name="graph-trend" size={24} color="white" />

          );
        },
      }} />
      <Tab.Screen name="Progress" 
            children={()=><ProgressScreen props={props}/>}

            // component={ProgressScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#7A9B76',
        },
        headerTintColor: '#fff',
        tabBarIcon: (tabInfo) => {
          return (
            <Foundation name="graph-pie" size={24} color="white" />

          );
        },
      }} />
      <Tab.Screen name="Metronome" component={ToolsScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#7A9B76',
        },
        headerTintColor: '#fff',
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons name="metronome" size={24} color="white" />
          );
        },
      }} />
      <Tab.Screen style={{opacity:0, position:'absolute'}} name="Profile" component={ProfileScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#7A9B76',
        },
        headerTintColor: '#fff',
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="md-person-circle-outline"
              size={24}
              color="white"
            />
          );
        },
      }} />
    </Tab.Navigator>
  );
}

export default function Nav(props) {
  return (
    <NavigationContainer>
{/* <View style={{zIndex:400,   width:'100%',  position:'absolute', marginTop:20 , display:'flex', justifyContent:'flex-end', flexDirection:"row", backgroundColor:"" }}>
  <View  style={{zIndex:400, backgroundColor:"gray",  width:40, height:40,  borderRadius: 100 / 2, display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"  }}>
    <Text style={{color:"white"}}>P</Text></View></View> */}
    
      <MyTabs props={props}/>
    </NavigationContainer>
  );
}
