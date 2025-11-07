import React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyledText } from '../StyledText';

export interface InfoCardProps {
  title: string;
  content: string;
  style?: ViewStyle;
}

export const InfoCard: React.FC<InfoCardProps> = React.memo(({
  title,
  content,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.content}>{content}</StyledText>
    </View>
  );
});

InfoCard.displayName = 'InfoCard';

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#89B09F',
    alignItems: 'center' as const,
  } as ViewStyle,
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700' as const,
    textAlign: 'center' as const,
    marginBottom: 8,
  },
  content: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500' as const,
    textAlign: 'center' as const,
  },
};
