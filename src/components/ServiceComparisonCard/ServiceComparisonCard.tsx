import React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyledText } from '../StyledText';

export interface ServiceComparisonCardProps {
  serviceName: string;
  rate: string;
  transferFee: string;
  transferTime: string;
  isHighlighted?: boolean;
  style?: ViewStyle;
}

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

const styles = {
  container: {
    backgroundColor: "#3D5F5A",
    borderRadius: 12,
    padding: 16,
    paddingVertical: 20,
    marginBottom: 16,
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'flex-start' as const,
  } as ViewStyle,
  highlighted: {
    backgroundColor: '#5A7B72',
  } as ViewStyle,
  serviceName: {
    color: '#FFEA69',
    fontSize: 24,
    fontWeight: '600' as const,
    letterSpacing: 0.5,
    flex: 0.4,
  },
  serviceDetails: {
    flex: 0.6,
    alignItems: 'flex-end' as const,
  },
  serviceRate: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500' as const,
    marginBottom: 6,
  },
  serviceFee: {
    color: '#FFFFFF',
    fontSize: 13,
    marginBottom: 4,
    opacity: 0.9,
  },
  serviceTime: {
    color: '#FFFFFF',
    fontSize: 13,
    opacity: 0.9,
  },
};
