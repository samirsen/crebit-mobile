import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  keyboardAvoiding: {flex: 1},
  scrollContent: {flexGrow: 1},
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
    marginBottom: 48,
  },
  title: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -1.2, // -0.03 * 40
    color: '#000',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  description: {
    marginTop: 8,
    fontFamily: fonts.satoshi.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.48, // -0.03 * 16
    color: '#9C9C9C',
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  formGroup: {
    width: 333,
    gap: 12,
  },
  inputBox: {marginBottom: 4},
  input: {
    fontFamily: fonts.inter.light,
    fontWeight: '300',
    fontSize: 14,
  },
  buttonGroup: {
    width: 'auto',
    paddingHorizontal: 30,
    // marginTop: 48,
  },
  continueButton: {marginBottom: 12},
  goBackButton: {},
});

