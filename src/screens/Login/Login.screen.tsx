import React, {useCallback, useState, useRef} from 'react';
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
import {LoginStyles} from './Login.styles';
import {useNavigation} from '@react-navigation/native';
import {ButtonGroup} from '../../components/ButtonGroup';

export const LoginScreen: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phoneNumber: '',
    email: '',
    password: '',
  });

  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleContinue = useCallback(() => {
    (navigation as any).navigate('OtpVerification', {
      source: 'LogIn', // or 'LogIn' if it's login flow
      phoneNumber: '+15551234567', // pass the phone number collected from previous screens
    });
  }, [navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmitEditing = useCallback(
    (field: keyof typeof form) => {
      switch (field) {
        case 'phoneNumber':
          emailRef.current?.focus();
          break;
        case 'email':
          passwordRef.current?.focus();
          break;
        case 'password':
          handleContinue(); // Trigger CTA action
          break;
      }
    },
    [handleContinue, emailRef, passwordRef],
  );

  return (
    <SafeAreaView style={LoginStyles.container}>
      <KeyboardAvoidingView
        style={LoginStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}
        keyboardVerticalOffset={0}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={LoginStyles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={LoginStyles.innerContainer}>
              <View style={LoginStyles.header}>
                <StyledText style={LoginStyles.title}>Log In</StyledText>
                <StyledText style={LoginStyles.description}>
                  Welcome Back, Please log in to continue.
                </StyledText>
              </View>
              <View style={LoginStyles.formGroup}>
                <StyledInputBox
                  label="Phone Number (Include your Country Code)"
                  labelRequired
                  value={form.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  placeholder="+1 000 0000"
                  ref={phoneRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  keyboardType="phone-pad"
                  containerStyle={LoginStyles.inputBox}
                  inputStyle={LoginStyles.input}
                  onSubmitEditing={() => handleSubmitEditing('phoneNumber')}
                />
                <StyledInputBox
                  label="Email"
                  labelRequired
                  value={form.email}
                  onChangeText={handleChange('email')}
                  placeholder="your-email@example.com"
                  ref={emailRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  containerStyle={LoginStyles.inputBox}
                  inputStyle={LoginStyles.input}
                  onSubmitEditing={() => handleSubmitEditing('email')}
                />
                <StyledInputBox
                  label="Password"
                  labelRequired
                  value={form.password}
                  onChangeText={handleChange('password')}
                  placeholder="Enter your password"
                  ref={passwordRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  secureTextEntry
                  containerStyle={LoginStyles.inputBox}
                  inputStyle={LoginStyles.input}
                  onSubmitEditing={() => handleSubmitEditing('password')}
                />
              </View>
            </View>
          </ScrollView>
          <View style={LoginStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
              continueStyle={LoginStyles.continueButton}
              backStyle={LoginStyles.goBackButton}
              groupStyle={{}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default LoginScreen;
