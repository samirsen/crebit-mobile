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
import {CreatePasswordStyles} from './CreatePassword.styles';
import {useNavigation} from '@react-navigation/native';
import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {updateSignUpData} from '../../store/slices/signUpSlice';

export const CreatePasswordScreen: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const signUpData = useAppSelector(state => state.signUp);

  const [form, setForm] = useState({
    password: signUpData.password,
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const passwordRef = useRef<TextInput>(null);
  const confirmRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
      
      // Validate passwords when either field changes
      if (field === 'password' || field === 'confirmPassword') {
        const updatedForm = {...form, [field]: text};
        
        if (updatedForm.password && updatedForm.confirmPassword) {
          if (updatedForm.password !== updatedForm.confirmPassword) {
            setPasswordError('Passwords do not match');
          } else {
            setPasswordError('');
          }
        } else {
          setPasswordError('');
        }
      }
    },
    [form],
  );

  // Check if all required fields are filled and valid
  const isFormValid = useMemo(() => {
    const passwordFilled = form.password.trim().length > 0;
    const confirmPasswordFilled = form.confirmPassword.trim().length > 0;
    const passwordsMatch = form.password === form.confirmPassword;
    const noPasswordError = !passwordError;
    
    return passwordFilled && confirmPasswordFilled && passwordsMatch && noPasswordError;
  }, [form.password, form.confirmPassword, passwordError]);

  const handleContinue = useCallback(() => {
    // Store password in Redux before navigating
    dispatch(
      updateSignUpData({
        password: form.password,
      }),
    );
    (navigation as any).navigate('AdditionalInfo', {
      phoneNumber: signUpData.phoneNumber,
    });
  }, [navigation, dispatch, form.password, signUpData.phoneNumber]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmitEditing = useCallback(
    (field: keyof typeof form) => {
      if (field === 'password') {
        confirmRef.current?.focus();
      } else if (field === 'confirmPassword') {
        handleContinue(); // Trigger CTA action
      }
    },
    [handleContinue, confirmRef],
  );

  return (
    <SafeAreaView style={CreatePasswordStyles.container}>
      <KeyboardAvoidingView
        style={CreatePasswordStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={CreatePasswordStyles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={CreatePasswordStyles.innerContainer}>
              <View style={CreatePasswordStyles.header}>
                <StyledText style={CreatePasswordStyles.title}>
                  Sign Up
                </StyledText>
                <StyledText style={CreatePasswordStyles.description}>
                  Complete your profile to get started. Your information is
                  always protected.
                </StyledText>
              </View>
              <View style={CreatePasswordStyles.formGroup}>
                <StyledInputBox
                  label="Password"
                  labelRequired
                  value={form.password}
                  onChangeText={handleChange('password')}
                  placeholder="Enter your password"
                  secureTextEntry
                  ref={passwordRef}
                  onSubmitEditing={() => handleSubmitEditing('password')}
                  borderColor="#CDCDCD"
                  containerStyle={CreatePasswordStyles.inputBox}
                  borderRadius={5}
                  height={41}
                  inputStyle={CreatePasswordStyles.input}
                />
                <StyledInputBox
                  label="Confirm Password"
                  labelRequired
                  value={form.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  placeholder="Confirm your password"
                  secureTextEntry
                  ref={confirmRef}
                  onSubmitEditing={() => handleSubmitEditing('confirmPassword')}
                  containerStyle={CreatePasswordStyles.inputBox}
                  borderColor={passwordError ? "#FF0000" : "#CDCDCD"}
                  borderRadius={5}
                  height={41}
                  inputStyle={CreatePasswordStyles.input}
                />
                {passwordError ? (
                  <StyledText style={{color: '#FF0000', fontSize: 12, marginTop: 4, marginLeft: 4}}>
                    {passwordError}
                  </StyledText>
                ) : null}
              </View>
            </View>
          </ScrollView>
          <View style={CreatePasswordStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
              continueDisabled={!isFormValid}
              continueStyle={CreatePasswordStyles.continueButton}
              backStyle={CreatePasswordStyles.goBackButton}
              groupStyle={{}}
            />
            {/* StepIndicator remains below */}
            <StepIndicator
              totalSteps={5}
              activeStep={2}
              containerStyle={CreatePasswordStyles.progressBarSection}
              activeStyle={CreatePasswordStyles.progressBarActive}
              inactiveStyle={CreatePasswordStyles.progressBarInactive}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default CreatePasswordScreen;
