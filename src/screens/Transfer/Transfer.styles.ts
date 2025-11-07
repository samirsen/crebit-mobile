import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
        paddingBottom:20,
        // marginBottom:30

  } as ViewStyle,
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
  } as ViewStyle,
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Add padding to account for bottom tabs
    gap: 20,
  } as ViewStyle,
  conversionSection: {
    gap: 16,
  } as ViewStyle,
  supportSection: {
    alignItems: 'center' as const,
    gap: 12,
  } as ViewStyle,
  supportText: {
    fontFamily: 'Inter',
    fontWeight: '400' as const,
    fontSize: 12,
    lineHeight: 16.8, // 140%
    letterSpacing: -0.48, // -4%
    color: '#699091',
    textAlign: 'center' as const,
  } as TextStyle,
  scheduleCallButton: {
    width: 357,
    height: 48,
    gap: 8,
    padding: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#003233',
  } as ViewStyle,
  transactionHistorySection: {
    flex: 1,
    marginTop: 8,
     paddingBottom:10,
  } as ViewStyle,
});
