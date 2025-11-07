import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface StyledTextProps extends TextProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
  fontSize?: number;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  letterSpacing?: number;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  style?: any;
}

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

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Satoshi-Variable',
    fontWeight: '100',
  },
});
