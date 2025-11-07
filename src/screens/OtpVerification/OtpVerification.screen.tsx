import React, {useMemo} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import {CodeField} from 'react-native-confirmation-code-field';
import {StyledText} from '../../components/StyledText';
import {OtpVerificationStyles} from './OtpVerification.styles';
import {useOtpVerificationController} from './OtpVerification.controller';
import {OtpVerificationScreenParams} from './OtpVerification.types';
import {useRoute} from '@react-navigation/native';

import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';

export const OtpVerificationScreen: React.FC = React.memo(() => {
  const route = useRoute();
  const {source, phoneNumber} = (route.params ||
    {}) as OtpVerificationScreenParams;
  const {code, setCode, handleResend, handleContinue, handleGoBack, otpLength} =
    useOtpVerificationController();

  const maskedPhone = useMemo(
    () => (phoneNumber ? `+${phoneNumber.slice(-15)}` : ''),
    [phoneNumber],
  );

  return (
    <SafeAreaView style={OtpVerificationStyles.container}>
      <KeyboardAvoidingView
        style={OtpVerificationStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={OtpVerificationStyles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={OtpVerificationStyles.innerContainer}>
              <View style={OtpVerificationStyles.header}>
                <StyledText style={OtpVerificationStyles.title}>
                  {`We just sent you
a text`}
                </StyledText>
                <StyledText style={OtpVerificationStyles.description}>
                  Enter code sent to {maskedPhone} and verify your number.
                </StyledText>
              </View>

              <View style={OtpVerificationStyles.formGroup}>
                <StyledText style={OtpVerificationStyles.otpLabel}>
                  Enter you OTP *
                </StyledText>
                <View style={OtpVerificationStyles.codeFieldContainer}>
                  <CodeField
                    value={code}
                    onChangeText={setCode}
                    cellCount={otpLength}
                    rootStyle={OtpVerificationStyles.codeFieldRoot}
                    keyboardType="number-pad"
                    renderCell={({index, symbol, isFocused}) => (
                      <View
                        key={index}
                        style={[
                          OtpVerificationStyles.cell,
                          isFocused && {borderColor: '#007AFF'},
                        ]}>
                        <Text
                          style={[
                            OtpVerificationStyles.cellText,
                            !symbol &&
                              OtpVerificationStyles.cellTextPlaceholder,
                          ]}>
                          {symbol || (isFocused ? '|' : '_')}
                        </Text>
                      </View>
                    )}
                  />
                </View>

                <View style={OtpVerificationStyles.resendSection}>
                  <StyledText style={{color: '#699091', fontSize: 12}}>
                    Didn’t receive a code?{' '}
                  </StyledText>
                  <StyledText
                    style={OtpVerificationStyles.resendText}
                    onPress={handleResend}>
                    Resend
                  </StyledText>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={OtpVerificationStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
              continueStyle={OtpVerificationStyles.continueButton}
              backStyle={
                source === 'SignUp'
                  ? OtpVerificationStyles.goBackButton
                  : OtpVerificationStyles.goBackButtonLogin
              }
              groupStyle={{}}
            />
            {source === 'SignUp' && (
              <StepIndicator
                totalSteps={5}
                activeStep={3}
                containerStyle={OtpVerificationStyles.progressBarSection}
                activeStyle={OtpVerificationStyles.progressBarActive}
                inactiveStyle={OtpVerificationStyles.progressBarInactive}
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default OtpVerificationScreen;
