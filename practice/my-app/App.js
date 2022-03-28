import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function Box() {
  

  return (
    <View style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"50%"}}>
      <CircularProgress
  value={100}
  radius={50}
  duration={2000}
  textColor={'#ecf0f1'}
  maxValue={200}
  title={'KM/H'}
  titleColor={'white'}
  titleStyle={{fontWeight: 'bold'}}
/>
    </View>
  );
}