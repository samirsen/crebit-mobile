import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledText } from '../StyledText';

export interface StyledInputBoxProps extends TextInputProps {
  label?: string;
  labelRequired?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  rightIconOnPress?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
  height?: number;
  iconSize?: number;
  iconColor?: string;
  onSubmitEditing?: () => void;
  onFocus?: () => void;
}

export const StyledInputBox = React.forwardRef<TextInput, StyledInputBoxProps>(({
  label,
  labelRequired = false,
  leftIcon,
  rightIcon,
  rightIconOnPress,
  containerStyle,
  inputStyle,
  labelStyle,
  disabled = false,
  loading = false,
  error,
  borderColor = '#205253',
  backgroundColor = '#FFFFFF',
  borderRadius = 4,
  padding = 12,
  height = 41,
  iconSize = 16,
  iconColor = '#868686',
  onSubmitEditing,
  onFocus,
  ...textInputProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const internalRef = useRef<TextInput>(null);
  const inputRef = ref || internalRef;

  const defaultContainerStyle: ViewStyle = {
    marginBottom: 20,
  };

  const defaultLabelStyle: TextStyle = {
    fontSize: 12,
    fontWeight: '400',
    color: '#868686',
    marginBottom: 8,
    lineHeight: 12,
    letterSpacing: -0.36, // -3%
  };

  const defaultInputContainerStyle: ViewStyle = {
    height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding,
    borderRadius,
    borderWidth: 0.8,
    borderColor: isFocused ? '#009699' : borderColor,
    backgroundColor,
    opacity: disabled ? 0.6 : 1,
    // Ensure the entire container is touchable
    width: '100%',
    // Add cursor pointer style for non-editable inputs (dropdowns)
    ...(textInputProps.editable === false && {
      cursor: 'pointer',
    }),
  };

  const defaultInputStyle: TextStyle = {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
    minHeight: height - 2, // Ensure input takes full height
  };

  const iconContainerStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    padding: 4, // Add padding to increase touch area
    minWidth: 24,
    minHeight: 24,
  };

  const handleFocus = () => {
    if (inputRef && typeof inputRef === 'object' && 'current' in inputRef) {
      inputRef.current?.focus();
    }
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmitEditing = () => {
    console.log('handleSubmitEditing called');
    onSubmitEditing?.();
  };

  const handleRightIconPress = () => {
    if (rightIconOnPress) {
      rightIconOnPress();
    } else {
      // Default behavior: focus the input when edit icon is pressed
      handleFocus();
    }
  };

  const handleContainerPress = () => {
    // If input is not editable (like dropdown), always trigger the action
    if (!textInputProps.editable) {
      if (rightIconOnPress) {
        rightIconOnPress();
      }
      return;
    }
    
    // Otherwise, focus the input
    handleFocus();
  };

  return (
    <View style={[defaultContainerStyle, containerStyle]}>
      {label && (
        <StyledText style={[defaultLabelStyle, labelStyle]}>
          {label}
          {labelRequired && <StyledText color="#FF0000"> *</StyledText>}
        </StyledText>
      )}
      
      <TouchableOpacity 
        style={defaultInputContainerStyle}
        onPress={handleContainerPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        {leftIcon && (
          <View style={{ marginRight: 8 }}>
            <CustomIcon 
              name={leftIcon} 
              size={iconSize} 
              color={iconColor} 
            />
          </View>
        )}
        
        <TextInput
          {...textInputProps}
          ref={inputRef}
          style={[defaultInputStyle, inputStyle]}
          editable={!disabled && !loading && textInputProps.editable !== false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={handleSubmitEditing}
          placeholderTextColor="#868686"
          showSoftInputOnFocus={textInputProps.editable !== false && textInputProps.showSoftInputOnFocus !== false}
          pointerEvents={textInputProps.editable === false ? 'none' : 'auto'}
          returnKeyType={textInputProps.returnKeyType || 'next'}
          blurOnSubmit={false}
        />
        
        {rightIcon && (
          <TouchableOpacity 
            style={iconContainerStyle}
            onPress={handleRightIconPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
          >
            <CustomIcon 
              name={rightIcon} 
              size={iconSize} 
              color={iconColor} 
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      
      {error && (
        <StyledText 
          color="#FF0000" 
          fontSize={12} 
          style={{ marginTop: 4 }}
        >
          {error}
        </StyledText>
      )}
    </View>
  );
});

StyledInputBox.displayName = 'StyledInputBox';

export default StyledInputBox;
