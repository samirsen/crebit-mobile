import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const OtpVerificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 59,
    paddingBottom: 34,
    paddingHorizontal: 16,
    backgroundColor: colors.surface,
    minHeight: 700,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    width: 333,
    marginBottom: 24,
  },
  title: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -1.2,
    color: '#000',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  description: {
    fontFamily: fonts.satoshi.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.48,
    color: '#9C9C9C',
    alignSelf: 'stretch',
    marginTop: 8,
    textAlign: 'left',
  },
  formGroup: {
    width: 'auto',
    gap: 12,
    marginTop: 36,
    marginBottom: 24,
  },
  codeFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingHorizontal: 20,
  },
  otpLabel: {
    width: 'auto',
    fontFamily: fonts.inter.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.03,
    color: '#868686',
    marginBottom: 8,
  },
  codeFieldRoot: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  cell: {
    width: 47.25,
    height: 45,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#CDCDCD',
    backgroundColor: '#FFF',
    justifyContent: 'center',

    // alignItems: 'center',
    // marginRight: 10,
  },
  cellText: {
    fontFamily: fonts.inter.light,
    fontWeight: '300',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    letterSpacing: -0.03,
  },
  cellTextPlaceholder: {
    color: 'rgba(0,0,0,0.4)',
  },
  resendSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  resendText: {
    fontFamily: fonts.inter.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: '#699091',
    marginLeft: 2,
    textDecorationLine: 'underline',
  },
  buttonGroup: {
    width: 'auto',
    paddingHorizontal: 30,
  },
  continueButton: {
    marginBottom: 12,
  },
  goBackButton: {
    marginBottom: 5,
  },
  goBackButtonLogin: {
    marginBottom: 0,
  },
  progressBarSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: 20,
    width: 105,
    alignSelf: 'center',
  },
  progressBarActive: {
    width: 17.8,
    height: 2,
    backgroundColor: '#0C3E3F',
    borderRadius: 4,
    marginRight: 4,
  },
  progressBarInactive: {
    width: 17.8,
    height: 2,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    marginRight: 4,
  },
});
