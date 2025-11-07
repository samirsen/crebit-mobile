import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: spacing.md - 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm + 2,
    paddingBottom: spacing.sm + 4,
    height: 90,
    shadowColor: colors.text.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    justifyContent: 'space-between',
  } as ViewStyle,

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  label: {
    color: '#545454',
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    letterSpacing: 0.5,
  } as TextStyle,

  currencySelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1ff',
    width: 95,
    borderRadius: 30,
    height: 32,
  } as ViewStyle,

  currencyFlag: {
    fontSize: fontSizes.base,
    marginRight: spacing.xs + 2,
  } as TextStyle,

  currencyCode: {
    color: colors.text.dark,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    fontFamily: fonts.satoshi.regular,
    marginRight: spacing.xs + 2,
  } as TextStyle,

  amountContainer: {
    flex: 1,
    justifyContent: 'space-between',
  } as ViewStyle,

  amountRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  } as ViewStyle,

  amountPrefix: {
    color: colors.text.dark,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    marginRight: spacing.xs,
  } as TextStyle,

  amountInput: {
    color: '#C9C9C9',
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    paddingVertical: 0,
  } as TextStyle,

  amountText: {
    color: colors.text.dark,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    paddingVertical: 0,
  } as TextStyle,
});
