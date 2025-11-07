import {StyleSheet} from 'react-native';
import {fonts, fontWeights, colors, spacing} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between', // distribute content vertically
    paddingVertical: spacing.lg, // consistent vertical breathing space
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'obviously',
    textAlign: 'center',
    letterSpacing: -0.98,
    color: colors.background,
  },

  gifContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  titleDesc: {
    fontFamily: fonts.satoshi.medium,
    fontWeight: fontWeights.bold,
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 28.8,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#000000',
    marginBottom: spacing.sm,
  },

  desc: {
    fontFamily: fonts.satoshi.regular,
    fontWeight: fontWeights.normal,
    fontSize: 14,
    lineHeight: 16.8,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#9C9C9C',
  },

  buttonsContainer: {
    width: '100%',
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  guestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.inter.regular,
    fontWeight: fontWeights.normal,
    fontSize: 12,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#699091',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  guest: {
    fontFamily: fonts.inter.regular,
    fontWeight: fontWeights.normal,
    fontSize: 12,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#699091',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  guestUnderline: {
    textDecorationLine: 'underline',
  },
});
