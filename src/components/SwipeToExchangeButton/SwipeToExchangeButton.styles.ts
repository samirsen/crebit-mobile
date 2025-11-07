import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

const { width: screenWidth } = Dimensions.get('window');

export const createStyles = (
  buttonWidth: number,
  thumbSize: number,
  disabled: boolean,
  isCompleted: boolean
) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.md,
  } as ViewStyle,

  buttonContainer: {
    width: buttonWidth,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.5 : 1,
  } as ViewStyle,

  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 33,
  } as ViewStyle,

  textContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  } as ViewStyle,

  swipeText: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.satoshi.semiBold,
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: 0.5,
  } as TextStyle,

  completedText: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.satoshi.bold,
    color: colors.services.crebit,
    textAlign: 'center',
    letterSpacing: 0.5,
  } as TextStyle,

  thumb: {
    position: 'absolute',
    left: spacing.sm,
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    shadowColor: colors.text.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  } as ViewStyle,

  completedThumb: {
    backgroundColor: colors.services.crebit,
  } as ViewStyle,

  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  } as ViewStyle,

  shimmerGradient: {
    width: 100,
    height: '100%',
    opacity: 0.3,
  } as ViewStyle,

  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  arrow: {
    marginHorizontal: 2,
  } as ViewStyle,
});
