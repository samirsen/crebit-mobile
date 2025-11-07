// import React from 'react';
// import { TouchableOpacity, ViewStyle } from 'react-native';
// import CustomIcon from '../CustomIcon/CustomIcon';

// export interface SwapButtonProps {
//   onPress: () => void;
//   style?: ViewStyle;
// }

// export const SwapButton: React.FC<SwapButtonProps> = React.memo(({
//   onPress,
//   style,
// }) => {
//   return (
//     <TouchableOpacity 
//       style={[styles.container, style]} 
//       onPress={onPress}
//       activeOpacity={0.7}
//     >
//       <CustomIcon name="transfer" size={10} color="#242121" />
//     </TouchableOpacity>
//   );
// });

// SwapButton.displayName = 'SwapButton';

// const styles = {
//   container: {
//     alignSelf: 'center' as const,
//     backgroundColor: '#FFFFFF',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center' as const,
//     alignItems: 'center' as const,
//     marginVertical: -16,
//     zIndex: 1,
//     transform: [{ rotate: '90deg' }],
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 4,
//     borderWidth: 4,
//     borderColor: '#094041',
//   } as ViewStyle,
// };


import React, { useRef } from 'react';
import { TouchableOpacity, ViewStyle, Animated, View } from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';

export interface SwapButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export const SwapButton: React.FC<SwapButtonProps> = React.memo(({
  onPress,
  style,
}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Scale animation on press
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Rotation animation
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      // Reset rotation value after animation
      rotateValue.setValue(0);
    });

    onPress();
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // 180 degree rotation
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotation }, { scale: scaleValue }] ,zIndex: 1 }} >
      <TouchableOpacity 
        style={[styles.container, style]} 
      onPress={handlePress}
      activeOpacity={0.95}
      >
        <CustomIcon name="transfer" size={10} color="#242121" />
      </TouchableOpacity>
    </Animated.View>
  );
});

SwapButton.displayName = 'SwapButton';

const styles = {
  container: {
    alignSelf: 'center' as const,
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginVertical: -16,
    zIndex: 1,
    transform: [{ rotate: '90deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // elevation: 4,
    borderWidth: 5,
    borderColor: '#094041',
  } as ViewStyle,
};

