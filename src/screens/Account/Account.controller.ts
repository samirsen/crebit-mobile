import { AppDispatch } from '../../store/store';
import { updateField, setLoading, markAsClean, setErrors } from '../../store/slices/accountSlice';
import { AccountFormData } from './Account.types';
import { TextInput, ScrollView } from 'react-native';
import { useCallback } from 'react';

export class AccountController {
  static updateField = (dispatch: AppDispatch, field: keyof AccountFormData, value: string) => {
    dispatch(updateField({ field, value }));
  };

  static setLoading = (dispatch: AppDispatch, isLoading: boolean) => {
    dispatch(setLoading(isLoading));
  };

  static markAsClean = (dispatch: AppDispatch) => {
    dispatch(markAsClean());
  };

  static setErrors = (dispatch: AppDispatch, errors: Partial<AccountFormData>) => {
    dispatch(setErrors(errors));
  };

  static validateForm = (formData: AccountFormData): Partial<AccountFormData> => {
    const errors: Partial<AccountFormData> = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.nativeCountry.trim()) {
      errors.nativeCountry = 'Native country is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    return errors;
  };

  static async updateAccount(
    dispatch: AppDispatch,
    formData: AccountFormData
  ): Promise<{ success: boolean; errors?: Partial<AccountFormData> }> {
    const errors = AccountController.validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
      return { success: false, errors };
    }

    dispatch(setLoading(true));

    try {
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would make the actual API call
      // const response = await api.updateAccount(formData);
      
      dispatch(markAsClean());
      dispatch(setErrors({}));
      
      return { success: true };
    } catch (error) {
      console.error('Account update failed:', error);
      return { success: false };
    } finally {
      dispatch(setLoading(false));
    }
  }

  // Navigation functions for keyboard "Next" button
  static focusNextInput = (nextRef: React.RefObject<TextInput>) => {
    if (nextRef.current) {
      nextRef.current.focus();
    }
  };

  // Auto-scroll to input when focused
  static scrollToInput = (inputRef: React.RefObject<TextInput>, scrollViewRef: React.RefObject<ScrollView>) => {
    setTimeout(() => {
      if (inputRef.current && scrollViewRef.current) {
        inputRef.current.measureLayout(
          scrollViewRef.current.getInnerViewNode() || scrollViewRef.current.getScrollableNode() || scrollViewRef.current,
          (x, y, width, height) => {
            scrollViewRef.current?.scrollTo({
              y: Math.max(0, y - 100), // Offset to keep input visible
              animated: true,
            });
          },
          () => {}
        );
      }
    }, 100);
  };

  // Handle field change
  static handleFieldChange = (dispatch: AppDispatch, field: keyof AccountFormData) => {
    return (value: string) => {
      dispatch(updateField({ field, value }));
    };
  };

  // Handle country selection
  static handleCountrySelect = (dispatch: AppDispatch, country: any, setShowCountryModal: (show: boolean) => void) => {
    dispatch(updateField({ field: 'nativeCountry', value: country.name }));
    setShowCountryModal(false);
  };

  // Handler for input focus and scrolling
  static handleFocusAndScroll = (
    scrollViewRef: React.RefObject<ScrollView>,
    yPosition: number | null = null,
    scrollToEnd: boolean = false
  ) => {
    return () => {
      setTimeout(() => {
        // Scroll to end if scrollToEnd is true
        if (scrollToEnd) {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }
        // Scroll to yPosition if it's provided and valid
        else if (yPosition !== null && yPosition !== undefined) {
          scrollViewRef.current?.scrollTo({ y: yPosition, animated: true });
        }
      }, 150); // Adjust this delay as necessary
    };
  };

  // Handler for submit editing (moving to next input)
  static handleSubmitEditing = (
    currentField: keyof AccountFormData,
    refs: {
      firstName: React.RefObject<TextInput>;
      lastName: React.RefObject<TextInput>;
      phoneNumber: React.RefObject<TextInput>;
      email: React.RefObject<TextInput>;
    }
  ) => {
    switch (currentField) {
      case 'firstName':
        refs.lastName.current?.focus();
        break;
      case 'lastName':
        refs.phoneNumber.current?.focus();
        break;
      case 'phoneNumber':
        refs.email.current?.focus();
        break;
      case 'email':
        // For the last field, just blur the keyboard
        refs.email.current?.blur();
        break;
    }
  };
}
