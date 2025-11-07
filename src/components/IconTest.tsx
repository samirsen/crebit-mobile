import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomIcon from './CustomIcon/CustomIcon';
import { StyledText } from './StyledText';

const IconTest = () => {
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconName: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default IconTest;
