import React from 'react';
import SvgFrogCoins from '../../../assets/svgs/FrogCoins';
import {SignUpCompleteStyles} from './SignUpComplete.styles';
import {useSignUpCompleteController} from './SignUpComplete.controller';
import {StepIndicator} from '../../components/StepIndicator';
import {ButtonGroup} from '../../components/ButtonGroup';
import {View} from 'react-native';

export const SignUpCompleteScreen: React.FC = React.memo(() => {
  const {handleContinue, handleGoBack} = useSignUpCompleteController();
  //   const {width} = Dimensions.get('window');

  return (
    <View style={SignUpCompleteStyles.container}>
      <View style={SignUpCompleteStyles.imageSection}>
        <SvgFrogCoins
        // width={width} height={600}
        />
      </View>

      <View style={{flex: 1}} />
      <View style={SignUpCompleteStyles.buttonGroup}>
        <ButtonGroup
          onContinue={handleContinue}
          onBack={handleGoBack}
          continueText="Continue"
          backText="Go Back"
          continueStyle={SignUpCompleteStyles.continueButton}
          backStyle={SignUpCompleteStyles.goBackButton}
          groupStyle={{}}
        />
        <View style={SignUpCompleteStyles.progressBarSection}>
          <StepIndicator
            totalSteps={5}
            activeStep={5}
            containerStyle={SignUpCompleteStyles.progressBarSection}
            activeStyle={SignUpCompleteStyles.progressBarActive}
            inactiveStyle={SignUpCompleteStyles.progressBarInactive}
          />
        </View>
      </View>
    </View>
  );
});
