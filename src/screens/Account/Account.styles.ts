import {StyleSheet} from 'react-native';

export const AccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F7F7F7',
    gap: 20,
    marginBottom: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003233',
    lineHeight: 28,
    letterSpacing: -1.12,
    textAlign: 'left',
    marginBottom: 10,
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    gap: 12,
    marginTop: 10,
    paddingBottom: 20,
  },
  updateButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resetPasswordButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});
