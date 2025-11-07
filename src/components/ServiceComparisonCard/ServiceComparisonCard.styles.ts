import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D5F5A",
    borderRadius: spacing.sm + 4,
    padding: spacing.md,
    paddingVertical: spacing.md + 4,
    marginBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  } as ViewStyle,
  
  highlighted: {
    backgroundColor: '#5A7B72',
  } as ViewStyle,
  
  serviceName: {
    color: colors.services.crebit,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.satoshi.semiBold,
    letterSpacing: 0.5,
    flex: 0.4,
  } as TextStyle,
  
  serviceDetails: {
    flex: 0.6,
    alignItems: 'flex-end',
  } as ViewStyle,
  
  serviceRate: {
    color: colors.text.primary,
    fontSize: fontSizes.md - 1,
    fontWeight: fontWeights.medium,
    fontFamily: fonts.satoshi.medium,
    marginBottom: spacing.xs + 2,
  } as TextStyle,
  
  serviceFee: {
    color: colors.text.primary,
    fontSize: fontSizes.sm + 1,
    fontFamily: fonts.satoshi.regular,
    marginBottom: spacing.xs,
    opacity: 0.9,
  } as TextStyle,
  
  serviceTime: {
    color: colors.text.primary,
    fontSize: fontSizes.sm + 1,
    fontFamily: fonts.satoshi.regular,
    opacity: 0.9,
  } as TextStyle,
});
