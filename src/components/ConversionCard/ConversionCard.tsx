import React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyledText } from '../StyledText';

export interface ConversionCardProps {
  title: string;
  amount: string;
  style?: ViewStyle;
}

export const ConversionCard: React.FC<ConversionCardProps> = React.memo(({
  title,
  amount,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.amount}>{amount}</StyledText>
    </View>
  );
});

ConversionCard.displayName = 'ConversionCard';

const styles = {
  container: {
    width: 357,
    height: 85,
    paddingTop: 24,
    paddingRight: 20,
    paddingBottom: 24,
    paddingLeft: 20,
    gap: 10,
    borderRadius: 8,
    backgroundColor: '#003233',
  } as ViewStyle,
  title: {
    fontFamily: 'Satoshi',
    fontWeight: '700' as const,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.24, // -2%
    color: '#FFFFFF',
  },
  amount: {
    fontFamily: 'Satoshi',
    fontWeight: '700' as const,
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.48, // -2%
    color: '#FFFFFF',
  },
};
