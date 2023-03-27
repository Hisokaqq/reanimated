import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const Lesson1Screen = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const boxColor = useSharedValue('rgba(0, 0, 0, 0.5)');

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;

      // Update box color based on drag position
      
      boxColor.value = `rgba(0, 0, 0, ${1})`;
    },
    onEnd: () => {
        const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if(distance <150) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
      boxColor.value = 'rgba(0, 0, 0, 0.5)';
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
      backgroundColor: boxColor.value,
    };
  });

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <View style={{ width: 300, height: 300, borderWidth: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 500 }}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[{ height: 100, width: 100, borderRadius: 20 }, rStyle]} />
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
};

export default Lesson1Screen;
