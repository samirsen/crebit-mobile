import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 435,
    gap: spacing.md + 4,
    padding: spacing.md + 4,
    borderRadius: spacing.md + 4,
    backgroundColor: '#F7F7F7',
  } as ViewStyle,
  
  title: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['3xl'],
    lineHeight: fontSizes['3xl'],
    letterSpacing: -1.12,
    color: colors.secondary,
  } as TextStyle,
  
  scrollContainer: {
    flexGrow: 1,
  } as ViewStyle,
  
  scrollContent: {
    gap: spacing.sm + 4,
  } as ViewStyle,
  
  transactionCard: {
    width: '100%',
    minHeight: 113,
    borderRadius: spacing.md - 1,
    padding: spacing.md + 4,
    gap: spacing.sm,
    borderWidth: 0.4,
    backgroundColor: colors.surface,
    borderColor: '#CDCDCD',
  } as ViewStyle,
  
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  } as ViewStyle,
  
  recipientText: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs,
    letterSpacing: -0.24,
    color: colors.secondary,
    flex: 1,
  } as TextStyle,
  
  rightSection: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  } as ViewStyle,
  
  receiptButton: {
    paddingVertical: 2,
  } as ViewStyle,
  
  receiptText: {
    fontFamily: fonts.inter.medium,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs,
    letterSpacing: -0.36,
    color: '#699091',
    textDecorationLine: 'underline',
  } as TextStyle,
  
  statusBadge: {
    alignSelf: 'flex-end',
  } as ViewStyle,
  
  amountText: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['2xl'],
    lineHeight: fontSizes['2xl'],
    letterSpacing: -0.48,
  } as TextStyle,
  
  dateText: {
    fontFamily: fonts.inter.regular,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.xs,
    lineHeight: 16.8,
    letterSpacing: -0.48,
    color: colors.text.muted,
  } as TextStyle,
});
