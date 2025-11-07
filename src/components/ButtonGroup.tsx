import React, {memo, useMemo} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {CustomButton} from './CustomButton/CustomButton';

interface ButtonGroupProps {
  onContinue: () => void;
  onBack: () => void;
  continueText?: string;
  backText?: string;
  continueDisabled?: boolean;
  backDisabled?: boolean;
  continueStyle?: StyleProp<ViewStyle>;
  backStyle?: StyleProp<ViewStyle>;
  groupStyle?: StyleProp<ViewStyle>;
  // Any additional CustomButton props if needed in future
}

export const ButtonGroup: React.FC<ButtonGroupProps> = memo(
  ({
    onContinue,
    onBack,
    continueText = 'Continue',
    backText = 'Go Back',
    continueDisabled = false,
    backDisabled = false,
    continueStyle,
    backStyle,
    groupStyle,
  }) => {
    // Memo props
    const contButtonProps = useMemo(
      () => ({
        text: continueText,
        onPress: onContinue,
        gradientColors: ['#054546', '#076E70'],
        textColor: '#fff',
        borderColor: '#003233',
        borderWidth: 1,
        height: 46,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: '500',
        style: continueStyle,
        disabled: continueDisabled,
      }),
      [continueText, onContinue, continueStyle, continueDisabled],
    );

    const backButtonProps = useMemo(
      () => ({
        text: backText,
        onPress: onBack,
        backgroundColor: '#fff',
        textColor: '#003233',
        borderColor: '#003233',
        borderWidth: 0.38,
        height: 46,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: '500',
        leftIcon: 'arrowRightIcon',
        iconSize: 10,
        style: backStyle,
        disabled: backDisabled,
      }),
      [backText, onBack, backStyle, backDisabled],
    );

    return (
      <View style={groupStyle}>
        <CustomButton {...contButtonProps} />
        <CustomButton {...backButtonProps} />
      </View>
    );
  },
);

export default ButtonGroup;
