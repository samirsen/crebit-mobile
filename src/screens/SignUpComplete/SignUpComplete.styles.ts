import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const SignUpCompleteStyles = StyleSheet.create({
  // scrollContainer: {
  //   paddingTop: 60,
  //   paddingHorizontal: 16,
  //   paddingBottom: 160, // space so image does not overlap bottom buttons
  // },

  header: {
    marginBottom: 30,
    marginLeft: 20,
  },

  title: {
    fontFamily: fonts.satoshi.bold,
    fontSize: 32,
    color: '#000',
  },

  description: {
    marginTop: 8,
    fontFamily: fonts.satoshi.regular,
    fontSize: 16,
    color: '#808080',
  },

  imageSection: {
    alignItems: 'center',
    // marginBottom: 40,
  },

  progressBarSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  progressBarActive: {
    width: 18,
    height: 2,
    backgroundColor: '#0C3E3F',
    marginRight: 4,
  },

  progressBarInactive: {
    width: 18,
    height: 2,
    backgroundColor: '#D9D9D9',
    marginRight: 4,
  },

  /* FIXED BOTTOM BUTTONS */
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 40, // ← your requirement
    left: 16,
    right: 16,
  },

  continueButton: {
    marginBottom: 12,
  },

  goBackButton: {
    marginBottom: 12,
  },

  skipButton: {
    marginBottom: 0,
  },
});
