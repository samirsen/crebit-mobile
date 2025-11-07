import React from 'react';
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledText } from '../StyledText';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes } from '../../constants/fonts';
import { CustomButtonProps } from './CustomButton.types';
import { createStyles } from './CustomButton.styles';
import { useCustomButtonController } from './CustomButton.controller';

export const CustomButton: React.FC<CustomButtonProps> = React.memo(({
  text,
  onPress,
  gradientColors,
  backgroundColor = colors.primary,
  textColor = colors.text.primary,
  width,
  height = 50,
  borderRadius = spacing.sm,
  fontSize = fontSizes.base,
  fontWeight = '600',
  leftIcon,
  rightIcon,
  middleIcon,
  iconSize = 20,
  iconColor,
  imageSource,
  isLoading = false,
  disabled = false,
  withShadow = false,
  fullWidth = false,
  style,
  borderWidth = 0,
  borderColor = 'transparent',
  padding = spacing.md,
}) => {
  const { scaleValue, handlePressIn, handlePressOut } = useCustomButtonController();
  
  const finalIconColor = iconColor || textColor;
  const isIconOnly = !text && (leftIcon || rightIcon || middleIcon || imageSource);
  const hasGradient = gradientColors && gradientColors.length > 0;

  const styles = createStyles(
    height,
    width,
    fullWidth,
    borderRadius,
    borderWidth,
    borderColor,
    disabled,
    withShadow,
    hasGradient ?? false,
    padding,
    style
  );

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={textColor} />;
    }

    const iconElement = (iconName: string) => (
      <CustomIcon name={iconName} size={iconSize} color={finalIconColor} />
    );

    const imageElement = imageSource ? (
      <Image 
        source={imageSource} 
        style={{ width: iconSize, height: iconSize }} 
        resizeMode="contain" 
      />
    ) : null;

    // Icon-only mode
    if (isIconOnly) {
      if (imageSource) return imageElement;
      if (middleIcon) return iconElement(middleIcon);
      if (leftIcon) return iconElement(leftIcon);
      if (rightIcon) return iconElement(rightIcon);
    }

    // For debugging - let's make sure text is always visible
    if (text && !leftIcon && !rightIcon && !middleIcon && !imageSource) {
      return (
        <StyledText
          color={textColor}
          fontSize={fontSize}
          fontWeight={fontWeight as any}
          textAlign="center"
          letterSpacing={0.2}
          numberOfLines={1}
          ellipsizeMode="tail"
          allowFontScaling={false}
          style={{
            lineHeight: fontSize ? fontSize * 1.2 : 20,
            includeFontPadding: false,
            textAlignVertical: 'center',
          }}
        >
          {text}
        </StyledText>
      );
    }

    // Text with optional icons
    return (
      <View style={styles.contentContainer}>
        {leftIcon && (
          <View style={styles.iconContainer}>
            {iconElement(leftIcon)}
          </View>
        )}
        {imageSource && (
          <View style={[styles.iconContainer, !text && { marginRight: 0 }]}>
            {imageElement}
          </View>
        )}
        
        {text && (
          <StyledText
            color={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight as any}
            textAlign="center"
            letterSpacing={-0.32}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              includeFontPadding: false,
              textAlignVertical: 'center',
              fontFamily: fonts.primary,
            }}
          >
            {text}
          </StyledText>
        )}
        
        {middleIcon && !leftIcon && !rightIcon && iconElement(middleIcon)}
        {rightIcon && (
          <View style={styles.iconContainerRight}>
            {iconElement(rightIcon)}
          </View>
        )}
      </View>
    );
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || isLoading}
        activeOpacity={0.8}
      >
        {hasGradient ? (
          <View style={styles.containerStyle}>
            <LinearGradient
              colors={gradientColors!}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.contentStyle}
            >
              {renderContent()}
            </LinearGradient>
          </View>
        ) : (
          <View style={[styles.solidButtonStyle, { backgroundColor }]}>
            {renderContent()}
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
});

CustomButton.displayName = 'CustomButton';

export default CustomButton;
