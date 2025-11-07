import { useState, useEffect, useCallback } from 'react';
import { Keyboard, KeyboardEventListener } from 'react-native';
import { KeyboardVisibilityState } from './useKeyboardVisibility.types';

export const useKeyboardVisibilityController = (): KeyboardVisibilityState => {
  const [isKeyboardVisible, setKeyboardVisibility] = useState(false);

  const handleKeyboardShow: KeyboardEventListener = useCallback(() => {
    setKeyboardVisibility(true);
  }, []);

  const handleKeyboardHide: KeyboardEventListener = useCallback(() => {
    setKeyboardVisibility(false);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow
    );
    
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, [handleKeyboardShow, handleKeyboardHide]);

  return { 
    isKeyboardVisible, 
    setKeyboardVisibility 
  };
};
