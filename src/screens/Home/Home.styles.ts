import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,

  },
  scrollContent: {
    flexGrow: 1,
    // borderColor: '#89B09F',
    // borderRadius: 20,
    // borderWidth: 0.25,
    paddingBottom: 100, // Add padding to account for bottom tabs
  },
  liveRateCard: {
    paddingHorizontal: spacing.md,
    shadowColor: '#00000080',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,

  },
  liveRateContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 1100,
    borderColor: '#89B09F',
    borderWidth: 0.25,
  },
  liveRateHeader: {
  flexDirection: 'row',
  justifyContent: 'center',   // centers content horizontally
  alignItems: 'center',       // centers vertically
  marginBottom: spacing.lg,
  marginTop: spacing.md,
  zIndex: 1,
  position: 'relative',
},
liveRateTitle: {
  fontFamily: 'Satoshi',
  color: '#FFFFFF',
  fontSize: 38,
  fontWeight: '600',
  textAlign: 'center',
  marginTop: 0, // remove the top margin
},

  refreshIcon: {
    color: colors.text.secondary,
    fontSize: 18,
  },
  sectionToggle: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom: spacing.lg,
    // justifyContent: 'space-between',
    gap: spacing.sm,
    paddingHorizontal: 0,
  },
  crebitContainer:{
    paddingBottom: spacing.lg,
    width: '90%',
  },
  exchangeRate: {
    alignItems: 'center',
    // marginBottom: spacing.xl,
  },
  rateText: {
    color: '#FFEA69',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  // Compare section styles
  comparisonContainer: {
    // marginTop: spacing.md,
    width: '90%',
    paddingBottom: spacing.lg,
  },
  // Crebit section specific styles
  feesContainer: {
    // marginBottom: spacing.sm,
  },
  transferInfo: {
    marginBottom: spacing.md,
  },
disclaimer: {
  // marginTop: spacing.lg,
  marginBottom: spacing.sm,
},
disclaimerText: {
  color: '#699091',
  fontSize: 11,
  textAlign: 'center',
  lineHeight: 16,
  width: '100%',
},
divider: {
  marginBottom: spacing.sm,
},
swipeButtonContainer: {
  // marginTop: spacing.lg,
  marginBottom: spacing.md,
}
});
