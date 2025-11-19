import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {usePlaidLink} from '../../hooks/usePlaidLink';
import {loginSuccess} from '../../store/slices/authSlice';
import {useNavigation} from '@react-navigation/native';

export function useSignUpCompleteController() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isConnectingBank, setIsConnectingBank] = useState(false);

  // Initialize Plaid Link
  const {
    isLoading: isPlaidLoading,
    error: plaidError,
    openPlaidLink,
  } = usePlaidLink({
    onSuccess: (publicToken, metadata) => {
      console.log('Bank account connected successfully!');
      console.log('Public Token:', publicToken);
      console.log('Metadata:', metadata);
      
      // Show success message
      Alert.alert(
        'Success!',
        `Connected to ${metadata.institution?.name || 'your bank'}`,
        [
          {
            text: 'Continue',
            onPress: () => {
              // Complete the signup process
              dispatch(
                loginSuccess({
                  id: '999',
                  name: 'Dummy User',
                  email: 'dummy@example.com',
                  balance: 10000,
                }),
              );
            },
          },
        ]
      );
      setIsConnectingBank(false);
    },
    onExit: (error, metadata) => {
      console.log('Plaid Link exited:', error, metadata);
      setIsConnectingBank(false);
      
      if (error) {
        Alert.alert(
          'Connection Failed',
          error.errorMessage || 'Failed to connect your bank account',
          [{ text: 'Try Again' }]
        );
      }
    },
  });

  const handleContinue = useCallback(async () => {
    setIsConnectingBank(true);
    try {
      await openPlaidLink();
    } catch (error) {
      console.error('Error opening Plaid Link:', error);
      Alert.alert(
        'Error',
        'Failed to open bank connection. Please try again.',
        [{ text: 'OK' }]
      );
      setIsConnectingBank(false);
    }
  }, [openPlaidLink]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSkip = useCallback(() => {
    Alert.alert(
      'Skip Bank Connection?',
      'You can connect your bank account later in settings.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Skip',
          onPress: () => {
            dispatch(
              loginSuccess({
                id: '999',
                name: 'Dummy User',
                email: 'dummy@example.com',
                balance: 10000,
              }),
            );
          },
        },
      ]
    );
  }, [dispatch]);

  return {
    handleContinue,
    handleGoBack,
    handleSkip,
    isConnectingBank: isConnectingBank || isPlaidLoading,
    plaidError,
  };
}

