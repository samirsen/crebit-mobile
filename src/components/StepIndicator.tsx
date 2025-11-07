import React, {memo, useMemo} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface StepIndicatorProps {
  totalSteps: number;
  activeStep: number; // 1-based: 1,2,3...
  containerStyle?: StyleProp<ViewStyle>;
  activeStyle?: StyleProp<ViewStyle>;
  inactiveStyle?: StyleProp<ViewStyle>;
}

const DEFAULT_ACTIVE_STYLE = {
  width: 17.8,
  height: 2,
  backgroundColor: '#0C3E3F',
  borderRadius: 4,
  marginRight: 4,
};
const DEFAULT_INACTIVE_STYLE = {
  width: 17.8,
  height: 2,
  backgroundColor: '#D9D9D9',
  borderRadius: 4,
  marginRight: 4,
};
const DEFAULT_CONTAINER_STYLE = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  marginTop: 20,
  width: 105,
  alignSelf: 'center',
};

export const StepIndicator: React.FC<StepIndicatorProps> = memo(
  ({totalSteps, activeStep, containerStyle, activeStyle, inactiveStyle}) => {
    const barViews = useMemo(() => {
      const arr = [];
      for (let i = 0; i < totalSteps; ++i) {
        arr.push(
          <View
            key={i}
            style={
              i < activeStep
                ? [DEFAULT_ACTIVE_STYLE, activeStyle]
                : [DEFAULT_INACTIVE_STYLE, inactiveStyle]
            }
          />,
        );
      }
      return arr;
    }, [totalSteps, activeStep, activeStyle, inactiveStyle]);

    return (
      <View style={[DEFAULT_CONTAINER_STYLE, containerStyle]}>{barViews}</View>
    );
  },
);

export default StepIndicator;
