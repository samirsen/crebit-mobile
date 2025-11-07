import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    paddingTop: spacing.lg,
    paddingRight: spacing.md + 4,
    paddingBottom: spacing.lg,
    paddingLeft: spacing.md + 4,
    gap: spacing.sm + 2,
    borderRadius: spacing.sm,
    backgroundColor: colors.secondary,
  } as ViewStyle,
  
  title: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: '700',
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs,
    letterSpacing: -0.24,
    color: colors.text.primary,
  } as TextStyle,
  
  amount: {
    fontFamily: fonts.satoshi.bold,
    fontWeight: '700',
    fontSize: fontSizes['2xl'],
    lineHeight: fontSizes['2xl'],
    letterSpacing: -0.48,
    color: colors.text.primary,
  } as TextStyle,
});
