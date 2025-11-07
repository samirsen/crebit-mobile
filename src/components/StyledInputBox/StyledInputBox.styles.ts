import { ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes, fontWeights } from '../../constants/fonts';

export const createStyles = (
  height: number,
  padding: number,
  borderRadius: number,
  borderColor: string,
  backgroundColor: string,
  isFocused: boolean,
  disabled: boolean,
  isDropdown: boolean
) => ({
  defaultContainerStyle: {
    marginBottom: spacing.md + 4,
  } as ViewStyle,

  defaultLabelStyle: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    fontFamily: fonts.satoshi.regular,
    color: '#868686',
    marginBottom: spacing.sm,
    lineHeight: fontSizes.xs,
    letterSpacing: -0.36,
  } as TextStyle,

  defaultInputContainerStyle: {
    height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding,
    borderRadius,
    borderWidth: 0.8,
    borderColor: isFocused ? '#009699' : borderColor,
    backgroundColor,
    opacity: disabled ? 0.6 : 1,
    width: '100%',
    ...(isDropdown && {
      cursor: 'pointer',
    }),
  } as ViewStyle,

  defaultInputStyle: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fonts.satoshi.regular,
    color: colors.text.dark,
    paddingVertical: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
    minHeight: height - 2,
  } as TextStyle,

  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.sm,
    padding: spacing.xs,
    minWidth: 24,
    minHeight: 24,
  } as ViewStyle,

  leftIconContainer: {
    marginRight: spacing.sm,
  } as ViewStyle,

  errorText: {
    marginTop: spacing.xs,
  } as ViewStyle,
});
