import React, {useRef, useState, useCallback} from 'react';
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

export const CreatePasswordScreen: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const passwordRef = useRef<TextInput>(null);
  const confirmRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleContinue = useCallback(() => {
    (navigation as any).navigate('OtpVerification', {
      source: 'SignUp', // or 'LogIn' if it's login flow
      phoneNumber: '+15551234567', // pass the phone number collected from previous screens
    });
  }, [navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
                  containerStyle={CreatePasswordStyles.inputBox}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  inputStyle={CreatePasswordStyles.input}
                />
              </View>
            </View>
          </ScrollView>
          <View style={CreatePasswordStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
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
