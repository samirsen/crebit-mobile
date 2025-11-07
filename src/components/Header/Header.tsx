import React from 'react';
import { View } from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import { Profile } from '../Profile';
import { colors } from '../../constants/colors';
import { StyledText } from '../StyledText';
import { HeaderProps, HeaderTheme } from './Header.types';
import { styles } from './Header.styles';

export const Header: React.FC<HeaderProps> = ({ 
  theme = 'dark', 
  showProfile = true,
  showMenu = true 
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? colors.text.primary : colors.secondary;
  const iconColor = isDark ? colors.text.primary : colors.secondary;
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
        {showProfile && <Profile size={28} />}
      </View>
    </View>
  );
};


