import {useState, useRef, useCallback} from 'react';
import {TextInput} from 'react-native';

export const useStyledInputBoxController = (
  ref: any,
  rightIconOnPress?: () => void,
  onSubmitEditing?: () => void,
  onFocus?: () => void,
  isDropdown?: boolean,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const internalRef = useRef<TextInput>(null);
  const inputRef = ref || internalRef;

  const handleFocus = useCallback(() => {
    if (inputRef && typeof inputRef === 'object' && 'current' in inputRef) {
      inputRef.current?.focus();
    }
    setIsFocused(true);
    onFocus?.();
  }, [inputRef, onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleSubmitEditing = useCallback(() => {
    console.log('handleSubmitEditing called');
    onSubmitEditing?.();
  }, [onSubmitEditing]);

  const handleRightIconPress = useCallback(() => {
    if (rightIconOnPress) {
      rightIconOnPress();
    } else {
      // Default behavior: focus the input when edit icon is pressed
      handleFocus();
    }
  }, [rightIconOnPress, handleFocus]);

  const handleContainerPress = useCallback(() => {
    // If input is not editable (like dropdown), always trigger the action
    if (isDropdown) {
      if (rightIconOnPress) {
        rightIconOnPress();
      }
      return;
    }

    // Otherwise, focus the input
    handleFocus();
  }, [isDropdown, rightIconOnPress, handleFocus]);

  return {
    isFocused,
    inputRef,
    handleFocus,
    handleBlur,
    handleSubmitEditing,
    handleRightIconPress,
    handleContainerPress,
  };
};
