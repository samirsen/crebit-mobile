import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../StyledText';
import { ConversionCardProps } from './ConversionCard.types';
import { styles } from './ConversionCard.styles';

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

