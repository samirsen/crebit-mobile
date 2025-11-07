import { StyleSheet } from 'react-native';
import { spacing } from '../../constants/spacing';
import { fonts, fontSizes } from '../../constants/fonts';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
    backgroundColor: 'transparent',
  },
  leftSection: {
    width: 24,
    alignItems: 'flex-start',
  },
  rightSection: {
    width: 28,
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: fontSizes.xl,
    fontWeight: '700',
    fontFamily: fonts.obviously.bold,
    textAlign: 'center',
    flex: 1,
  },
});
