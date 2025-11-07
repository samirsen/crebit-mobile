import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../StyledText';
import { InfoCardProps } from './InfoCard.types';
import { styles } from './InfoCard.styles';

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

