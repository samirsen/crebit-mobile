import {StyleSheet} from 'react-native';
import {fonts, fontSizes, fontWeights, colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'obviously',
    textAlign: 'center',
    letterSpacing: -0.98,
    color: colors['background'],
  },
  titleContainer: {
    marginTop: 100,
    paddingHorizontal: 16,
  },
  titleDesc: {
    fontFamily: fonts.satoshi['medium'],
    fontWeight: fontWeights['bold'],
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 28.8,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#000000', //then changes to #205253
  },
  desc: {
    fontFamily: fonts.satoshi['regular'],
    fontWeight: fontWeights['normal'],
    fontSize: 14,
    lineHeight: 16.8,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#9C9C9C',
  },
  guest: {
    fontFamily: fonts.inter['regular'],
    fontWeight: fontWeights['medium'],
    fontSize: 12,
    letterSpacing: -0.03,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#699091',
  },
});
