import React, { useMemo, useCallback, useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { updateField, setLoading, markAsClean } from '../../store/slices/accountSlice';
import { AccountFormData } from './Account.types';
import { StyledInputBox } from '../../components/StyledInputBox';
import CustomButton from '../../components/CustomButton/CustomButton';
import { StyledText } from '../../components/StyledText';
import { Header } from '../../components/Header';
import { CountrySelectModal, CountryOption } from '../../components/CountrySelectModal';
import { AccountStyles } from './Account.styles';
import { AccountController } from './Account.controller';
import { useKeyboardVisibility } from '../../hooks/useKeyboardVisibility';

const COUNTRIES: CountryOption[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
];

export const AccountComponent: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { formData, isLoading, isDirty } = useAppSelector((state) => state.account);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const { isKeyboardVisible, setKeyboardVisibility } = useKeyboardVisibility();
  
  // Refs for input navigation
  const scrollViewRef = useRef<ScrollView>(null);
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const phoneNumberRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  // Group refs for easier management
  const refs = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    phoneNumber: phoneNumberRef,
    email: emailRef,
  };

  const handleFieldChange = useCallback((field: keyof AccountFormData) => {
    return AccountController.handleFieldChange(dispatch, field);
  }, [dispatch]);

  const handleCountrySelect = useCallback((country: CountryOption) => {
    AccountController.handleCountrySelect(dispatch, country, setShowCountryModal);
  }, [dispatch]);

  const handleUpdate = useCallback(async () => {
    if (!isDirty) return;
    
    dispatch(setLoading(true));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch(markAsClean());
      Alert.alert('Success', 'Account updated successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to update account. Please try again.');
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, isDirty]);

  const handleResetPassword = useCallback(() => {
    Alert.alert(
      'Reset Password',
      'Password reset link will be sent to your email.',
      [{ text: 'OK' }]
    );
  }, []);

  // Navigation functions for keyboard "Next" button
  const handleSubmitEditing = useCallback((field: keyof AccountFormData) => {
    AccountController.handleSubmitEditing(field, refs);
  }, [refs]);

  // Auto-scroll to input when focused
  const handleFocusAndScroll = useCallback((yPosition: number | null = null, scrollToEnd: boolean = false) => {
    return () => {
      setKeyboardVisibility(true);
      AccountController.handleFocusAndScroll(scrollViewRef, yPosition, scrollToEnd)();
    };
  }, [setKeyboardVisibility]);

  // Handle input blur
  const handleInputBlur = useCallback(() => {
    setKeyboardVisibility(false);
  }, [setKeyboardVisibility]);

  const selectedCountry = useMemo(() => {
    return COUNTRIES.find(country => country.name === formData.nativeCountry) || COUNTRIES[0];
  }, [formData.nativeCountry]);

  const isUpdateDisabled = useMemo(() => {
    return !isDirty || isLoading;
  }, [isDirty, isLoading]);

  return (
    <SafeAreaView style={AccountStyles.container}>
      <Header theme="light" showProfile showMenu />
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          ref={scrollViewRef}
          style={AccountStyles.scrollContainer} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={AccountStyles.contentContainer}>
            {/* Title */}
            <StyledText style={AccountStyles.title}>
              Edit your Account
            </StyledText>

            {/* Form Fields */}
            <View style={AccountStyles.formContainer}>
          {/* First Name */}
          <StyledInputBox
            label="First Name"
            labelRequired
            value={formData.firstName}
            onChangeText={handleFieldChange('firstName')}
            rightIcon="edit"
            placeholder="Enter first name"
            ref={firstNameRef}
            onSubmitEditing={() => handleSubmitEditing('firstName')}
            onFocus={handleFocusAndScroll(60)}
            onBlur={handleInputBlur}
          />

          {/* Last Name */}
          <StyledInputBox
            label="Last Name"
            labelRequired
            value={formData.lastName}
            onChangeText={handleFieldChange('lastName')}
            rightIcon="edit"
            placeholder="Enter last name"
            ref={lastNameRef}
            onSubmitEditing={() => handleSubmitEditing('lastName')}
            onFocus={handleFocusAndScroll(120)}
            onBlur={handleInputBlur}
          />

          {/* Native Country */}
          <StyledInputBox
            label="Native Country"
            labelRequired
            value={`${selectedCountry.flag} ${formData.nativeCountry}`}
            rightIcon="chevronDown"
            iconSize={10}
            rightIconOnPress={() => setShowCountryModal(true)}
            editable={false}
            placeholder="Select country"
            showSoftInputOnFocus={false}
          />

          {/* Phone Number */}
          <StyledInputBox
            label="Phone Number"
            value={formData.phoneNumber}
            onChangeText={handleFieldChange('phoneNumber')}
            rightIcon="edit"
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            ref={phoneNumberRef}
            onSubmitEditing={() => handleSubmitEditing('phoneNumber')}
            onFocus={handleFocusAndScroll(180)}
            onBlur={handleInputBlur}
          />

          {/* Email */}
          <StyledInputBox
            label="Email"
            labelRequired
            value={formData.email}
            onChangeText={handleFieldChange('email')}
            rightIcon="edit"
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="done"
            onSubmitEditing={() => handleSubmitEditing('email')}
            onFocus={handleFocusAndScroll(240)}
            onBlur={handleInputBlur}
          />
        </View>

            {/* Action Buttons */}
            <View style={isKeyboardVisible ? AccountStyles.buttonContainerKeyboard : AccountStyles.buttonContainer}>
          {/* Update Button */}
          <CustomButton
            text="Update"
            onPress={handleUpdate}
            disabled={isUpdateDisabled}
            isLoading={isLoading}
            gradientColors={['#054546', '#076E70']}
            borderColor="#003233"
            borderWidth={1}
            height={46}
            borderRadius={4}
            fontSize={14}
            fontWeight="500"
            textColor="#FFFFFF"
            style={AccountStyles.updateButton}
          />

          {/* Reset Password Button */}
          <CustomButton
            text="Reset your Password"
            onPress={handleResetPassword}
            backgroundColor="#FFFFFF"
            borderColor="#003233"
            borderWidth={0.38}
            height={46}
            borderRadius={4}
            fontSize={14}
            fontWeight="500"
            textColor="#003233"
            rightIcon="arrowRightIcon"
            iconSize={16}
            style={AccountStyles.resetPasswordButton}
          />
            </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Country Selection Modal */}
        <CountrySelectModal
          visible={showCountryModal}
          onClose={() => setShowCountryModal(false)}
          onSelect={handleCountrySelect}
          countries={COUNTRIES}
          selectedCountry={selectedCountry}
          title="Select Country"
        />
      </SafeAreaView>
    );
});

AccountComponent.displayName = 'AccountComponent';