import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.surface,
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -spacing.md,
    zIndex: 1,
    transform: [{ rotate: '90deg' }],
    shadowColor: colors.text.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 5,
    borderColor: colors.background,
  } as ViewStyle,
});
