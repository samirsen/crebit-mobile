import React from 'react';
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  ViewStyle,
  GestureResponderEvent,
  ImageSourcePropType,
  Animated,
  DimensionValue,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledText } from '../StyledText';

export interface CustomButtonProps {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  gradientColors?: string[];
  backgroundColor?: string;
  textColor?: string;
  width?: DimensionValue;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  leftIcon?: string;
  rightIcon?: string;
  middleIcon?: string;
  iconSize?: number;
  iconColor?: string;
  imageSource?: ImageSourcePropType;
  isLoading?: boolean;
  disabled?: boolean;
  withShadow?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
}

export const CustomButton: React.FC<CustomButtonProps> = React.memo(({
  text,
  onPress,
  gradientColors,
  backgroundColor = '#007AFF',
  textColor = '#FFFFFF',
  width,
  height = 50,
  borderRadius = 12,
  fontSize = 16,
  fontWeight = '600' as TextStyle['fontWeight'],
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
  padding = 16,
}) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  
  const finalIconColor = iconColor || textColor;
  const isIconOnly = !text && (leftIcon || rightIcon || middleIcon || imageSource);
  const hasGradient = gradientColors && gradientColors.length > 0;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // Base container style (no border for gradient buttons)
  const containerStyle: ViewStyle = {
    height,
    width: fullWidth ? '100%' : width,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 12,
    opacity: disabled ? 0.6 : 1,
    ...(withShadow && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }),
    ...style,
  };

  // Content style for both gradient and solid buttons
  const contentStyle: ViewStyle = {
    flex: 1,
    borderRadius,
    borderWidth: hasGradient ? borderWidth : 0,
    borderColor: hasGradient ? borderColor : 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Solid button style (includes border)
  const solidButtonStyle: ViewStyle = {
    ...containerStyle,
    borderWidth,
    borderColor,
    borderRadius,
    paddingHorizontal: padding,
    // paddingVertical: padding / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

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
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {leftIcon && (
          <View style={{ marginRight: 8 }}>
            {iconElement(leftIcon)}
          </View>
        )}
        {imageSource && (
          <View style={{ marginRight: text ? 8 : 0 }}>
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
            }}
          >
            {text}
          </StyledText>
        )}
        
        {middleIcon && !leftIcon && !rightIcon && iconElement(middleIcon)}
        {rightIcon && (
          <View style={{ marginLeft: 8 }}>
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
          <View style={containerStyle}>
            <LinearGradient
              colors={gradientColors!}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={contentStyle}
            >
              {renderContent()}
            </LinearGradient>
          </View>
        ) : (
          <View style={[solidButtonStyle, { backgroundColor }]}>
            {renderContent()}
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
});

CustomButton.displayName = 'CustomButton';

export default CustomButton;
