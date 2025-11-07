import React from 'react';
import { Text } from 'react-native';
import { StyledTextProps } from './StyledText.types';
import { styles } from './StyledText.styles';

export const StyledText: React.FC<StyledTextProps> = ({
  children,
  width,
  height,
  fontWeight = '400',
  fontSize,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
  textDecorationLine,
  numberOfLines,
  ellipsizeMode,
  style,
  ...props
}) => {
  const textStyle = [
    styles.defaultText,
    {
      width,
      height,
      fontWeight,
      fontSize,
      color,
      textAlign,
      lineHeight,
      letterSpacing,
      textDecorationLine,
    },
    style,
  ];

  return (
    <Text
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}
    >
      {children}
    </Text>
  );
};

