import { ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';

export const createStyles = (
  height: number,
  width: any,
  fullWidth: boolean,
  borderRadius: number,
  borderWidth: number,
  borderColor: string,
  disabled: boolean,
  withShadow: boolean,
  hasGradient: boolean,
  padding: number,
  style?: ViewStyle
) => ({
  // Base container style (no border for gradient buttons)
  containerStyle: {
    height,
    width: fullWidth ? '100%' : width,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: spacing.sm,
    opacity: disabled ? 0.6 : 1,
    ...(withShadow && {
      shadowColor: colors.text.dark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }),
    ...style,
  } as ViewStyle,

  // Content style for both gradient and solid buttons
  contentStyle: {
    flex: 1,
    borderRadius,
    borderWidth: hasGradient ? borderWidth : 0,
    borderColor: hasGradient ? borderColor : 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  // Solid button style (includes border)
  solidButtonStyle: {
    height,
    width: fullWidth ? '100%' : width,
    borderWidth,
    borderColor,
    borderRadius,
    paddingHorizontal: padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.6 : 1,
    ...(withShadow && {
      shadowColor: colors.text.dark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }),
    ...style,
  } as ViewStyle,

  iconContainer: {
    marginRight: spacing.sm,
  } as ViewStyle,

  iconContainerRight: {
    marginLeft: spacing.sm,
  } as ViewStyle,

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});
