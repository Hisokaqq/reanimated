import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    withSpring,
    withRepeat,
  } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native';

const Lesson1Screen = () => {

  const progress = useSharedValue(0)
  const scale = useSharedValue(0)

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}, {rotate: `${Math.PI * 2 * progress.value}rad`}],
      borderRadius: progress.value*20,
      
    }
  })

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), -1, true)
    scale.value = withRepeat(withSpring(1), -1, true)
    
  }, [])

  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center", flex:1 }}>
      <Animated.View style={[{ height: 100, width: 100, backgroundColor: "black" }, reanimatedStyle]}/>
    </SafeAreaView>
  )
}

export default Lesson1Screen