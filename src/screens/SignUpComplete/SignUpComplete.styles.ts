import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('window');

export const SignUpCompleteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 59,
    paddingHorizontal: 16,
    paddingBottom: 34,
  },
  imageSection: {
    // width: width - 32, // 393px - 32px padding approx
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 56,
    // marginBottom: 60,
  },
  svgFrog: {
    width: 285,
    height: 334,
    resizeMode: 'center',
  },
  buttonGroup: {
    bottom: 134,
    width: 'auto',
    paddingHorizontal: 15,
  },
  continueButton: {
    marginBottom: 12,
  },
  goBackButton: {
    marginBottom: 24,
  },
  progressBarSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    // marginTop: 20,
    width: 105,
    alignSelf: 'center',
  },
  progressBarActive: {
    width: 17.8,
    height: 2,
    backgroundColor: '#0C3E3F',
    borderRadius: 4,
    marginRight: 4,
  },
  progressBarInactive: {
    width: 17.8,
    height: 2,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    marginRight: 4,
  },
});

