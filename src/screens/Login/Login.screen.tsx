// src/screens/Login/LoginScreen.tsx
import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {StyledInputBox} from '../../components/StyledInputBox';
import {StyledText} from '../../components/StyledText';
import {LoginStyles} from './Login.styles';
import {ButtonGroup} from '../../components/ButtonGroup';

import {useLoginController} from './Login.controller';

export const LoginScreen: React.FC = React.memo(() => {
  const {
    form,
    handleChange,
    handleContinue,
    handleGoBack,
    loading,
    phoneRef,
    emailRef,
    passwordRef,
    scrollRef,
    handleSubmitEditing,
    handleScrollTo,
  } = useLoginController();

  return (
    <SafeAreaView style={LoginStyles.container}>
      <KeyboardAvoidingView
        style={LoginStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}
        keyboardVerticalOffset={0}>
        <View style={{flex: 1}}>
          <ScrollView
            ref={scrollRef}
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
                  onFocus={() => handleScrollTo(50)}
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
              continueText={loading ? 'Please wait...' : 'Continue'}
              backText="Go Back"
              continueStyle={LoginStyles.continueButton}
              backStyle={LoginStyles.goBackButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default LoginScreen;
