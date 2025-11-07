import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import { Profile } from '../Profile';
import { spacing } from '../../constants/spacing';
import { StyledText } from '../StyledText';

export type HeaderTheme = 'dark' | 'light';

interface HeaderProps {
  theme?: HeaderTheme;
  showProfile?: boolean;
  showMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  theme = 'dark', 
  showProfile = true,
  showMenu = true 
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#003233';
  const iconColor = isDark ? '#FFFFFF' : '#003233';
  const title = 'Crebit';

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {showMenu && (
          <CustomIcon name="menu" color={iconColor} size={15} />
        )}
      </View>
      
      <StyledText style={[styles.logo, { color: textColor }]}>{title}</StyledText>
      
      <View style={styles.rightSection}>
        {showProfile && <Profile size={24} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
    backgroundColor: 'transparent',
  },
  leftSection: {
    width: 24,
    alignItems: 'flex-start',
  },
  rightSection: {
    width: 24,
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily:'Obviously',
    textAlign: 'center',
    flex: 1,
  },
});

