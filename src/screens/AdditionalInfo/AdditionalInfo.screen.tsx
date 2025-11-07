import React from 'react';
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
import {AdditionalInfoStyles} from './AdditionalInfo.styles';
import {useAdditionalInfoController} from './AdditionalInfo.controller';
import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';

export const AdditionalInfoScreen: React.FC = React.memo(() => {
  const {form, handleChange, handleContinue, handleGoBack} =
    useAdditionalInfoController();

  // Input refs (optional for field focus jump)
  const streetRef = React.useRef<TextInput>(null);
  const cityRef = React.useRef<TextInput>(null);
  const stateRef = React.useRef<TextInput>(null);
  const zipRef = React.useRef<TextInput>(null);
  const countryRef = React.useRef<TextInput>(null);

  return (
    <SafeAreaView style={AdditionalInfoStyles.container}>
      <KeyboardAvoidingView
        style={AdditionalInfoStyles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={AdditionalInfoStyles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={AdditionalInfoStyles.innerContainer}>
              <View style={AdditionalInfoStyles.header}>
                <StyledText style={AdditionalInfoStyles.title}>
                  Additional Info
                </StyledText>
                <StyledText style={AdditionalInfoStyles.description}>
                  Enter your address information.
                </StyledText>
              </View>

              <View style={AdditionalInfoStyles.formGroup}>
                <StyledInputBox
                  label="Street Address"
                  labelRequired
                  value={form.street}
                  onChangeText={handleChange('street')}
                  placeholder="Enter your Street Address"
                  ref={streetRef}
                  borderRadius={5}
                  height={41}
                  containerStyle={AdditionalInfoStyles.inputBox}
                  inputStyle={AdditionalInfoStyles.input}
                />
                <StyledInputBox
                  label="City"
                  labelRequired
                  value={form.city}
                  onChangeText={handleChange('city')}
                  placeholder="Enter your City"
                  ref={cityRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={AdditionalInfoStyles.inputBox}
                  inputStyle={AdditionalInfoStyles.input}
                />
                <StyledInputBox
                  label="State/ Province"
                  labelRequired
                  value={form.state}
                  onChangeText={handleChange('state')}
                  placeholder="Enter your State/ Province"
                  ref={stateRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={AdditionalInfoStyles.inputBox}
                  inputStyle={AdditionalInfoStyles.input}
                />
                <StyledInputBox
                  label="Zip Code"
                  labelRequired
                  value={form.zip}
                  onChangeText={handleChange('zip')}
                  placeholder="Enter your Zip Code"
                  ref={zipRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={AdditionalInfoStyles.inputBox}
                  inputStyle={AdditionalInfoStyles.input}
                  keyboardType="number-pad"
                />
                <StyledInputBox
                  label="Country"
                  labelRequired
                  value={form.country}
                  onChangeText={handleChange('country')}
                  placeholder="Enter your Country"
                  ref={countryRef}
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  containerStyle={AdditionalInfoStyles.inputBox}
                  inputStyle={AdditionalInfoStyles.input}
                />
              </View>
            </View>
          </ScrollView>
          <View style={AdditionalInfoStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
              continueStyle={AdditionalInfoStyles.continueButton}
              backStyle={AdditionalInfoStyles.goBackButton}
              groupStyle={{}}
            />
            {/* StepIndicator remains below */}
            <StepIndicator
              totalSteps={5}
              activeStep={4}
              containerStyle={AdditionalInfoStyles.progressBarSection}
              activeStyle={AdditionalInfoStyles.progressBarActive}
              inactiveStyle={AdditionalInfoStyles.progressBarInactive}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default AdditionalInfoScreen;
