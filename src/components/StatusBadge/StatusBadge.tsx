import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StatusBadgeProps } from './StatusBadge.types';
import { styles } from './StatusBadge.styles';
import { useStatusBadgeController } from './StatusBadge.controller';

export const StatusBadge: React.FC<StatusBadgeProps> = React.memo(({
  status,
  leftIcon,
  rightIcon,
  iconOnly = false,
  textOnly = false,
  style,
}) => {
  const { getStatusConfig } = useStatusBadgeController();
  const config = getStatusConfig(status);

  if (iconOnly && (leftIcon || rightIcon)) {
    return (
      <View style={[styles.iconOnlyContainer, style]}>
        {leftIcon && (
          <CustomIcon 
            name={leftIcon} 
            size={12} 
            color={config.iconColor} 
          />
        )}
        {rightIcon && (
          <CustomIcon 
            name={rightIcon} 
            size={12} 
            color={config.iconColor} 
          />
        )}
      </View>
    );
  }

  if (textOnly) {
    return (
      <View style={[styles.textOnlyContainer, { backgroundColor: config.backgroundColor }, style]}>
        <StyledText style={[styles.text, { color: config.textColor }]}>
          {config.text}
        </StyledText>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: config.backgroundColor }, style]}>
      {leftIcon && (
        <CustomIcon 
          name={leftIcon} 
          size={12} 
          color={config.iconColor} 
          style={styles.leftIcon}
        />
      )}
      <StyledText style={[styles.text, { color: config.textColor }]}>
        {config.text}
      </StyledText>
      {rightIcon && (
        <CustomIcon 
          name={rightIcon} 
          size={12} 
          color={config.iconColor} 
          style={styles.rightIcon}
        />
      )}
    </View>
  );
});

StatusBadge.displayName = 'StatusBadge';

