import React from 'react';
import { View } from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledText } from '../StyledText';
import { styles } from './IconTest.styles';

export const IconTest = () => {
  const iconNames = ['arrowUp', 'transfer', 'accountIcon', 'home', 'menu', 'edit', 'refresh','arrowRightIcon','chevronDown','phoneCall'];
  
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Icon Test</StyledText>
      {iconNames.map((iconName) => (
        <View key={iconName} style={styles.iconRow}>
          <CustomIcon name={iconName} size={30} color="#000" />
          <StyledText style={styles.iconName}>{iconName}</StyledText>
        </View>
      ))}
    </View>
  );
};
