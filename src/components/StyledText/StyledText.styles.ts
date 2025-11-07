import { StyleSheet } from 'react-native';
import { fonts, fontWeights } from '../../constants/fonts';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  defaultText: {
    fontFamily: fonts.satoshi.variable,
    fontWeight: fontWeights.thin,
    color: colors.text.primary,
  },
});
