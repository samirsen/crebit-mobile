import React, {useRef, useState, useCallback, useMemo} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {StyledInputBox} from '../../components/StyledInputBox';
import {StyledText} from '../../components/StyledText';
import {
  CountrySelectModal,
  CountryOption,
} from '../../components/CountrySelectModal';
import {COUNTRIES} from '../../constants/countries';
import {SignUpStyles} from './SignUp.styles';
import {useNavigation} from '@react-navigation/native';
import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {updateSignUpData} from '../../store/slices/signUpSlice';

export const SignUpScreen: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const signUpData = useAppSelector(state => state.signUp);
  
  const [form, setForm] = useState({
    firstName: signUpData.firstName,
    lastName: signUpData.lastName,
    nativeCountry: COUNTRIES[0].name,
    phoneNumber: signUpData.phoneNumber,
    email: signUpData.email,
    dateOfBirth: signUpData.dateOfBirth,
  });
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [dobError, setDobError] = useState('');

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const dobRef = useRef<TextInput>(null);

  // DOB validation function
  const validateDOB = useCallback((dob: string) => {
    if (!dob) return '';
    
    // Remove any non-digit characters for validation
    const digitsOnly = dob.replace(/\D/g, '');
    
    // Check if it's exactly 8 digits (YYYYMMDD)
    if (digitsOnly.length === 8) {
      const year = digitsOnly.substring(0, 4);
      const month = digitsOnly.substring(4, 6);
      const day = digitsOnly.substring(6, 8);
      
      // Validate year (reasonable range)
      const yearNum = parseInt(year);
      const currentYear = new Date().getFullYear();
      if (yearNum < 1900 || yearNum > currentYear) {
        return 'Invalid year. Please enter a valid year.';
      }
      
      // Validate month
      const monthNum = parseInt(month);
      if (monthNum < 1 || monthNum > 12) {
        return 'Invalid month. Please enter a valid month (01-12).';
      }
      
      // Validate day
      const dayNum = parseInt(day);
      if (dayNum < 1 || dayNum > 31) {
        return 'Invalid day. Please enter a valid day (01-31).';
      }
      
      // Check if it's a valid date
      const date = new Date(yearNum, monthNum - 1, dayNum);
      if (date.getFullYear() !== yearNum || date.getMonth() !== monthNum - 1 || date.getDate() !== dayNum) {
        return 'Invalid date. Please check the date.';
      }
      
      return '';
    }
    
    // Check if it matches YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateRegex.test(dob)) {
      const [year, month, day] = dob.split('-');
      const yearNum = parseInt(year);
      const monthNum = parseInt(month);
      const dayNum = parseInt(day);
      const currentYear = new Date().getFullYear();
      
      if (yearNum < 1900 || yearNum > currentYear) {
        return 'Invalid year. Please enter a valid year.';
      }
      if (monthNum < 1 || monthNum > 12) {
        return 'Invalid month. Please enter a valid month (01-12).';
      }
      if (dayNum < 1 || dayNum > 31) {
        return 'Invalid day. Please enter a valid day (01-31).';
      }
      
      const date = new Date(yearNum, monthNum - 1, dayNum);
      if (date.getFullYear() !== yearNum || date.getMonth() !== monthNum - 1 || date.getDate() !== dayNum) {
        return 'Invalid date. Please check the date.';
      }
      
      return '';
    }
    
    return 'Please enter date in YYYY-MM-DD format or YYYYMMDD format.';
  }, []);

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      if (field === 'dateOfBirth') {
        // Format YYYYMMDD to YYYY-MM-DD if user enters 8 digits
        let formattedText = text;
        const digitsOnly = text.replace(/\D/g, '');
        
        if (digitsOnly.length === 8) {
          formattedText = `${digitsOnly.substring(0, 4)}-${digitsOnly.substring(4, 6)}-${digitsOnly.substring(6, 8)}`;
        }
        
        setForm(prev => ({...prev, [field]: formattedText}));
        
        // Validate DOB and set error
        const error = validateDOB(formattedText);
        setDobError(error);
      } else {
        setForm(prev => ({...prev, [field]: text}));
      }
    },
    [validateDOB],
  );

  const handleCountrySelect = useCallback((country: CountryOption) => {
    setForm(prev => ({...prev, nativeCountry: country.name}));
    setShowCountryModal(false);
  }, []);

  const selectedCountry = useMemo(
    () => COUNTRIES.find(c => c.name === form.nativeCountry) || COUNTRIES[0],
    [form.nativeCountry],
  );

  // Check if all required fields are filled and valid
  const isFormValid = useMemo(() => {
    const requiredFields = [
      form.firstName.trim(),
      form.lastName.trim(),
      form.phoneNumber.trim(),
      form.email.trim(),
      form.dateOfBirth.trim(),
    ];
    
    const allFieldsFilled = requiredFields.every(field => field.length > 0);
    const noDobError = !dobError;
    
    return allFieldsFilled && noDobError;
  }, [form.firstName, form.lastName, form.phoneNumber, form.email, form.dateOfBirth, dobError]);

  const handleContinue = useCallback(() => {
    // Store data in Redux before navigating
    dispatch(updateSignUpData({
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      dateOfBirth: form.dateOfBirth,
    }));
    (navigation as any).navigate('CreatePassword');
  }, [navigation, dispatch, form]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmitEditing = useCallback(
    (field: keyof typeof form) => {
      switch (field) {
        case 'firstName':
          lastNameRef.current?.focus();
          break;
        case 'lastName':
          phoneRef.current?.focus();
          break;
        case 'phoneNumber':
          emailRef.current?.focus();
          break;
        case 'email':
          dobRef.current?.focus();
          break;
        case 'dateOfBirth':
          handleContinue(); // Trigger CTA action
          break;
      }
    },
    [handleContinue, lastNameRef, phoneRef, emailRef, dobRef],
  );

  return (
    <SafeAreaView style={SignUpStyles.container}>
      <KeyboardAvoidingView
        style={SignUpStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios'}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={SignUpStyles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={SignUpStyles.innerContainer}>
              <View style={SignUpStyles.header}>
                <StyledText style={SignUpStyles.title}>Sign Up</StyledText>
                <StyledText style={SignUpStyles.description}>
                  Complete your profile to get started. Your information is
                  always protected.
                </StyledText>
              </View>
              <View style={SignUpStyles.formGroup}>
                <StyledInputBox
                  label="First Name"
                  labelRequired
                  value={form.firstName}
                  onChangeText={handleChange('firstName')}
                  placeholder="Enter First Name"
                  ref={firstNameRef}
                  onSubmitEditing={() => handleSubmitEditing('firstName')}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
                <StyledInputBox
                  label="Last Name"
                  labelRequired
                  value={form.lastName}
                  onChangeText={handleChange('lastName')}
                  placeholder="Enter Last Name"
                  ref={lastNameRef}
                  onSubmitEditing={() => handleSubmitEditing('lastName')}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
                <StyledInputBox
                  label="Native Country"
                  labelRequired
                  value={`${selectedCountry.name} ${selectedCountry.flag}`}
                  rightIcon="chevronDown"
                  iconSize={10}
                  rightIconOnPress={() => setShowCountryModal(true)}
                  editable={false}
                  placeholder="Select Country"
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.inputCountry}
                />
                <StyledInputBox
                  label="Phone Number (Include your Country Code)"
                  labelRequired
                  value={form.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  placeholder="+1 000 0000"
                  ref={phoneRef}
                  onSubmitEditing={() => handleSubmitEditing('phoneNumber')}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  keyboardType="phone-pad"
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
                <StyledInputBox
                  label="Email"
                  labelRequired
                  value={form.email}
                  onChangeText={handleChange('email')}
                  placeholder="your-email@example.com"
                  ref={emailRef}
                  onSubmitEditing={() => handleSubmitEditing('email')}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
                <StyledInputBox
                  label="Date of Birth"
                  labelRequired
                  value={form.dateOfBirth}
                  onChangeText={handleChange('dateOfBirth')}
                  placeholder="YYYY-MM-DD"
                  ref={dobRef}
                  onSubmitEditing={() => handleSubmitEditing('dateOfBirth')}
                  borderColor={dobError ? "#FF0000" : "#CDCDCD"}
                  borderRadius={5}
                  height={41}
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
                {dobError ? (
                  <StyledText style={{color: '#FF0000', fontSize: 12, marginTop: 4, marginLeft: 4}}>
                    {dobError}
                  </StyledText>
                ) : null}
              </View>
            </View>
          </ScrollView>
          <View style={SignUpStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
              continueDisabled={!isFormValid}
              continueStyle={SignUpStyles.continueButton}
              backStyle={SignUpStyles.goBackButton}
              groupStyle={{}}
            />
            {/* StepIndicator remains below */}
            <StepIndicator
              totalSteps={5}
              activeStep={1}
              containerStyle={SignUpStyles.progressBarSection}
              activeStyle={SignUpStyles.progressBarActive}
              inactiveStyle={SignUpStyles.progressBarInactive}
            />
          </View>
        </View>
        <CountrySelectModal
          visible={showCountryModal}
          onClose={() => setShowCountryModal(false)}
          onSelect={handleCountrySelect}
          countries={COUNTRIES}
          selectedCountry={selectedCountry}
          title="Select Country"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default SignUpScreen;
