import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: spacing.sm + 2,
    padding: spacing.sm + 4,
    marginBottom: spacing.sm,
    borderWidth: 0.5,
    borderColor: '#89B09F',
    alignItems: 'center',
  } as ViewStyle,
  
  title: {
    color: colors.text.primary,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    textAlign: 'center',
    marginBottom: spacing.sm,
  } as TextStyle,
  
  content: {
    color: colors.text.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: fonts.satoshi.medium,
    textAlign: 'center',
  } as TextStyle,
});
