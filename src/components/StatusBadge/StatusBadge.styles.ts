import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.sm + 4,
    minHeight: 24,
  } as ViewStyle,
  
  textOnlyContainer: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.sm + 4,
    minHeight: 24,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  
  iconOnlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
  } as ViewStyle,
  
  text: {
    fontFamily: fonts.satoshi.medium,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs,
    letterSpacing: -0.36,
  } as TextStyle,
  
  leftIcon: {
    marginRight: spacing.xs,
  } as ViewStyle,
  
  rightIcon: {
    marginLeft: spacing.xs,
  } as ViewStyle,
});
