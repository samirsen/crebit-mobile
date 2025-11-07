import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import { colors } from '../../constants/colors';
import { SwapButtonProps } from './SwapButton.types';
import { styles } from './SwapButton.styles';
import { useSwapButtonController } from './SwapButton.controller';

export const SwapButton: React.FC<SwapButtonProps> = React.memo(({
  onPress,
  style,
}) => {
  const { rotateValue, scaleValue, handlePress } = useSwapButtonController(onPress);

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotation }, { scale: scaleValue }] ,zIndex: 1 }} >
      <TouchableOpacity 
        style={[styles.container, style]} 
      onPress={handlePress}
      activeOpacity={0.95}
      >
        <CustomIcon name="transfer" size={10} color={colors.text.dark} />
      </TouchableOpacity>
    </Animated.View>
  );
});

SwapButton.displayName = 'SwapButton';


