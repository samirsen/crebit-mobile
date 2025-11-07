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

export const SignUpScreen: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    nativeCountry: COUNTRIES[0].name,
    phoneNumber: '',
    email: '',
  });
  const [showCountryModal, setShowCountryModal] = useState(false);

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleCountrySelect = useCallback((country: CountryOption) => {
    setForm(prev => ({...prev, nativeCountry: country.name}));
    setShowCountryModal(false);
  }, []);

  const selectedCountry = useMemo(
    () => COUNTRIES.find(c => c.name === form.nativeCountry) || COUNTRIES[0],
    [form.nativeCountry],
  );

  const handleContinue = useCallback(() => {
    (navigation as any).navigate('CreatePassword');
  }, [navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
                  borderColor="#CDCDCD"
                  borderRadius={5}
                  height={41}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  containerStyle={SignUpStyles.inputBox}
                  inputStyle={SignUpStyles.input}
                />
              </View>
            </View>
          </ScrollView>
          <View style={SignUpStyles.buttonGroup}>
            <ButtonGroup
              onContinue={handleContinue}
              onBack={handleGoBack}
              continueText="Continue"
              backText="Go Back"
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
