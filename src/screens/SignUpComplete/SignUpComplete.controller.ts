import {useCallback} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginSuccess} from '../../store/slices/authSlice';
import {useNavigation} from '@react-navigation/native';

export function useSignUpCompleteController() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const handleContinue = useCallback(() => {
    dispatch(
      loginSuccess({
        id: '999',
        name: 'Dummy User',
        email: 'dummy@example.com',
        balance: 10000,
      }),
    );
    // Navigation or action logic goes here
    console.log('Continue');
  }, [dispatch]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    handleContinue,
    handleGoBack,
  };
}

