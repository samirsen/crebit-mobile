import React from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import SvgFrogCoins from '../../../assets/svgs/FrogCoins';
import {SignUpCompleteStyles} from './SignUpComplete.styles';
import {useSignUpCompleteController} from './SignUpComplete.controller';
import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {StyledText} from '../../components/StyledText/StyledText';

export const SignUpCompleteScreen: React.FC = React.memo(() => {
  const {
    handleContinue,
    handleGoBack,
    handleSkip,
    isConnectingBank,
    plaidError,
  } = useSignUpCompleteController();

  return (
    <View style={{flex: 1}}>
      {/* <ScrollView
        contentContainerStyle={SignUpCompleteStyles.scrollContainer}
        showsVerticalScrollIndicator={false}> */}
      {/* HEADER */}
      <View style={SignUpCompleteStyles.header}>
        <StyledText style={SignUpCompleteStyles.title}>
          Set up your bank{' '}
        </StyledText>
        <StyledText style={SignUpCompleteStyles.description}>
          Connect your bank with PLAID
        </StyledText>
      </View>

      {/* IMAGE */}
      <View style={SignUpCompleteStyles.imageSection}>
        <SvgFrogCoins width={360} height={800} />
      </View>

      {/* ERROR OR LOADING */}
      {isConnectingBank && (
        <View style={{alignItems: 'center', marginTop: 10}}>
          <ActivityIndicator size="large" color="#0C3E3F" />
        </View>
      )}

      {plaidError && (
        <View style={{alignItems: 'center', marginTop: 10}}>
          <StyledText style={{color: 'red'}}>{plaidError}</StyledText>
        </View>
      )}
      {/* </ScrollView> */}

      {/* BOTTOM FIXED BUTTONS */}
      <View style={SignUpCompleteStyles.fixedButtonContainer}>
        <ButtonGroup
          onContinue={handleContinue}
          onBack={handleGoBack}
          continueText={isConnectingBank ? 'Connecting...' : 'Continue'}
          backText="Go Back"
          continueStyle={SignUpCompleteStyles.continueButton}
          backStyle={SignUpCompleteStyles.goBackButton}
          disabled={isConnectingBank}
        />

        <CustomButton
          text="Skip"
          onPress={handleSkip}
          backgroundColor="#fff"
          textColor="#003233"
          borderColor="#003233"
          rightIcon="arrowRightIcon"
          iconSize={10}
          borderWidth={0.5}
          height={46}
          borderRadius={4}
          fontSize={14}
          fontWeight="500"
          style={SignUpCompleteStyles.skipButton}
          disabled={isConnectingBank}
        />
        {/* PROGRESS */}
        <View style={SignUpCompleteStyles.progressBarSection}>
          <StepIndicator
            totalSteps={5}
            activeStep={5}
            activeStyle={SignUpCompleteStyles.progressBarActive}
            inactiveStyle={SignUpCompleteStyles.progressBarInactive}
          />
        </View>
      </View>
    </View>
  );
});
