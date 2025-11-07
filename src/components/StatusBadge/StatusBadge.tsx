import React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';

export type StatusType = 'processing' | 'completed' | 'failed' | 'pending';

export interface StatusBadgeProps {
  status: StatusType;
  leftIcon?: string;
  rightIcon?: string;
  iconOnly?: boolean;
  textOnly?: boolean;
  style?: ViewStyle;
}

export const StatusBadge: React.FC<StatusBadgeProps> = React.memo(({
  status,
  leftIcon,
  rightIcon,
  iconOnly = false,
  textOnly = false,
  style,
}) => {
  const getStatusConfig = (statusType: StatusType) => {
    switch (statusType) {
      case 'processing':
        return {
          text: 'Processing',
          backgroundColor: '#F5E6D3',
          textColor: '#B47300',
          iconColor: '#B47300',
        };
      case 'completed':
        return {
          text: 'Completed',
          backgroundColor: '#E6F3F3',
          textColor: '#003233',
          iconColor: '#003233',
        };
      case 'failed':
        return {
          text: 'Failed',
          backgroundColor: '#FFE6E6',
          textColor: '#FF3B30',
          iconColor: '#FF3B30',
        };
      case 'pending':
        return {
          text: 'Pending',
          backgroundColor: '#FFF3E6',
          textColor: '#FF9500',
          iconColor: '#FF9500',
        };
      default:
        return {
          text: 'Unknown',
          backgroundColor: '#F5F5F5',
          textColor: '#666666',
          iconColor: '#666666',
        };
    }
  };

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

const styles = {
  container: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minHeight: 24,
  } as ViewStyle,
  textOnlyContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minHeight: 24,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  } as ViewStyle,
  iconOnlyContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingHorizontal: 4,
    paddingVertical: 4,
  } as ViewStyle,
  text: {
    fontFamily: 'Satoshi',
    fontWeight: '500' as const,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.36, // -3%
  },
  leftIcon: {
    marginRight: 4,
  },
  rightIcon: {
    marginLeft: 4,
  },
};
