import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import CustomIcon from '../CustomIcon/CustomIcon';
import {StyledText} from '../StyledText';
import {colors} from '../../constants/colors';
import {StyledInputBoxProps} from './StyledInputBox.types';
import {createStyles} from './StyledInputBox.styles';
import {useStyledInputBoxController} from './StyledInputBox.controller';

export const StyledInputBox = React.forwardRef<TextInput, StyledInputBoxProps>(
  (
    {
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
      borderColor = colors.border,
      backgroundColor = colors.surface,
      borderRadius = 4,
      padding = 12,
      height = 41,
      iconSize = 16,
      iconColor = '#868686',
      onSubmitEditing,
      onFocus,
      ...textInputProps
    },
    ref,
  ) => {
    const {
      isFocused,
      inputRef,
      handleFocus,
      handleBlur,
      handleSubmitEditing,
      handleRightIconPress,
      handleContainerPress,
    } = useStyledInputBoxController(
      ref,
      rightIconOnPress,
      onSubmitEditing,
      onFocus,
      textInputProps.editable === false,
    );

    const styles = createStyles(
      height,
      padding,
      borderRadius,
      borderColor,
      backgroundColor,
      isFocused,
      disabled,
      textInputProps.editable === false,
    );

    return (
      <View style={[styles.defaultContainerStyle, containerStyle]}>
        {label && (
          <StyledText style={[styles.defaultLabelStyle, labelStyle]}>
            {label}
            {labelRequired && <StyledText color={colors.error}> *</StyledText>}
          </StyledText>
        )}

        <TouchableOpacity
          style={styles.defaultInputContainerStyle}
          onPress={handleContainerPress}
          disabled={disabled || loading}
          activeOpacity={0.8}>
          {leftIcon && (
            <View style={styles.leftIconContainer}>
              <CustomIcon name={leftIcon} size={iconSize} color={iconColor} />
            </View>
          )}

          <TextInput
            {...textInputProps}
            ref={inputRef}
            style={[styles.defaultInputStyle, inputStyle]}
            editable={
              !disabled && !loading && textInputProps.editable !== false
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={handleSubmitEditing}
            placeholderTextColor="#868686"
            showSoftInputOnFocus={
              textInputProps.editable !== false &&
              textInputProps.showSoftInputOnFocus !== false
            }
            pointerEvents={textInputProps.editable === false ? 'none' : 'auto'}
            returnKeyType={textInputProps.returnKeyType || 'next'}
            blurOnSubmit={false}
          />

          {rightIcon && (
            <TouchableOpacity
              style={styles.iconContainerStyle}
              onPress={handleRightIconPress}
              disabled={disabled || loading}
              activeOpacity={0.7}>
              <CustomIcon name={rightIcon} size={iconSize} color={iconColor} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>

        {error && (
          <StyledText
            color={colors.error}
            fontSize={12}
            style={styles.errorText}>
            {error}
          </StyledText>
        )}
      </View>
    );
  },
);

StyledInputBox.displayName = 'StyledInputBox';

export default StyledInputBox;
