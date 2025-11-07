import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../StyledText';
import { ServiceComparisonCardProps } from './ServiceComparisonCard.types';
import { styles } from './ServiceComparisonCard.styles';

export const ServiceComparisonCard: React.FC<ServiceComparisonCardProps> = React.memo(({
  serviceName,
  rate,
  transferFee,
  transferTime,
  isHighlighted = false,
  style,
}) => {
  return (
    <View style={[
      styles.container, 
      isHighlighted && styles.highlighted,
      style
    ]}>
      <StyledText style={styles.serviceName}>{serviceName}</StyledText>
      <View style={styles.serviceDetails}>
        <StyledText style={styles.serviceRate}>{rate}</StyledText>
        <StyledText style={styles.serviceFee}>{transferFee}</StyledText>
        <StyledText style={styles.serviceTime}>{transferTime}</StyledText>
      </View>
    </View>
  );
});

ServiceComparisonCard.displayName = 'ServiceComparisonCard';

