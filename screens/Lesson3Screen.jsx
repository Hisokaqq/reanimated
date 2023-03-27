import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const WORDS = ["What's", "up", "mobile", "devs?"]

const Lesson3Screen = () => {
    const {height, width} = Dimensions.get("window")
    const translateX = useSharedValue(0)
    
    const scrollHandler = useAnimatedScrollHandler((event)=>{
        translateX.value = event.contentOffset.x
    })
    const rTextStyle = (index) => useAnimatedStyle(()=>{
        const translateY = interpolate(translateX.value, [
            (index - 1) * width,
            index * width,
            (index + 1) * width
        ],
        [height/2,0,-height/2], Extrapolate.CLAMP
        )
        const opacity = interpolate(translateX.value, [
            (index - 1) * width,
            index * width,
            (index + 1) * width
        ],
        [-2,1,-2], Extrapolate.CLAMP
        )
        return {
            transform: [{
                translateY
            }],
            opacity
        }
    })
    const rStyle = (index) => useAnimatedStyle(() => {
        const scale = interpolate(translateX.value, [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ], [0, 1, 0], Extrapolate.CLAMP);
      
        const borderRadius = interpolate(translateX.value, [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
          
        ], [0, 140, 0], Extrapolate.CLAMP);
      
        return {
          transform: [{ scale }],
          borderRadius
        };
      });
  return (
    <Animated.ScrollView pagingEnabled onScroll={scrollHandler} scrollEventThrottle={16} horizontal style={styles.container}>
        {WORDS.map((title, index)=>(
            <View style={[ {width: width, height: height, backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`, alignItems: "center", justifyContent: "center",}]} key={index}>
                <Animated.View translateX={translateX} style={[{width: width*.7, height: width*.7, backgroundColor: "rgba(0,0,256,.4)", justifyContent: "center", alignItems: "center"}, rStyle(index)]}>
                </Animated.View>
                <Animated.View style={[{position: "absolute"}, rTextStyle(index)]}>
                    <Text style={{fontSize: 70, color: "#fff", textTransform: "uppercase", fontWeight: 700}}>{WORDS[index]}</Text>
                </Animated.View>
            </View>
        ))}
    </Animated.ScrollView>
  )
}

export default Lesson3Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    page: {
        backgroundColor: "blue",
    },
    square: {

    }

})
