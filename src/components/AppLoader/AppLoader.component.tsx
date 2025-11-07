import React, {useRef, useEffect, memo} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';

const NUM_LINES = 12;

const AppLoader: React.FC = () => {
  const isDarkMode = true;

  const spin = useRef(new Animated.Value(0)).current;
  const waves = Array.from(
    {length: NUM_LINES},
    () => useRef(new Animated.Value(0)).current,
  );

  useEffect(() => {
    // continuous rotation of the loader
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 3000, // faster rotation
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // animate individual wave lines
    waves.forEach((wave, i) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(wave, {
            toValue: 1,
            duration: 400,
            delay: i * 100,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(wave, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  }, []);

  const rotation = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#f59e0b'];

  return (
    <View
      style={[
        styles.overlay,
        {backgroundColor: isDarkMode ? '#020617' : '#f8fafc'},
      ]}>
      <Animated.View style={{transform: [{rotate: rotation}]}}>
        {waves.map((wave, i) => {
          const scale = wave.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1.5],
          });
          const angle = (i * 360) / NUM_LINES;
          const color = colors[i % colors.length];

          return (
            <Animated.View
              key={i}
              style={{
                position: 'absolute',
                width: 6, // thicker
                height: 80, // longer
                borderRadius: 3,
                backgroundColor: color,
                top: -40, // offset from center
                transform: [{rotate: `${angle}deg`}, {scaleY: scale}],
                opacity: scale.interpolate({
                  inputRange: [0.5, 1.5],
                  outputRange: [0.3, 1],
                }), // fading wave
              }}
            />
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(AppLoader);
