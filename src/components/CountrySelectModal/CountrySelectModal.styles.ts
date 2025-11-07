import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacing} from '../../constants/spacing';
import {fonts, fontSizes, fontWeights} from '../../constants/fonts';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: spacing.sm + 4,
    width: '80%',
    minHeight: 250,
    maxHeight: 500,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md + 4,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  modalTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.satoshi.semiBold,
    color: colors.secondary,
  },

  closeButton: {
    padding: spacing.xs,
  },

  closeText: {
    fontSize: fontSizes.lg,
    color: colors.secondary,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.satoshi.semiBold,
  },

  countryList: {
    minHeight: 250,
  },

  countryOption: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs,
    borderRadius: spacing.sm,
    backgroundColor: '#eaeaeaff',
  },

  selectedCountryOption: {
    backgroundColor: '#efefefff',
    borderWidth: 1,
    borderColor: colors.secondary,
  },

  countryText: {
    fontSize: fontSizes.base,
    color: colors.secondary,
    fontWeight: fontWeights.medium,
    fontFamily: fonts.satoshi.medium,
    textAlign: 'center',
  },

  separator: {
    height: spacing.md + 4,
  },
});
