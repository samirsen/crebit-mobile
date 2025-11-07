import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const AdditionalInfoStyles = StyleSheet.create({
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
    marginBottom: 32,
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
    width: 333,
    gap: 12,
    marginTop: 4,
  },
  inputBox: {
    marginBottom: 4,
  },
  input: {
    fontFamily: fonts.inter.light,
    fontWeight: '300',
    fontSize: 14,
  },
  inputPlaceholder: {
    color: 'rgba(0,0,0,0.4)',
  },
  buttonGroup: {
    width: 'auto',
    paddingHorizontal: 30,
  },
  continueButton: {
    marginBottom: 12,
  },
  goBackButton: {
    marginBottom: 24,
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
