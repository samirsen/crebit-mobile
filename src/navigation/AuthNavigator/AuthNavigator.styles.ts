import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts, fontSizes } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.satoshi.regular,
    color: colors.text.primary,
  },
});
