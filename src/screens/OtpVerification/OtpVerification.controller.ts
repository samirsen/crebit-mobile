import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {OtpVerificationScreenParams} from './OtpVerification.types';
import {useAppDispatch} from '../../hooks';
import {loginSuccess} from '../../store/slices/authSlice';

export function useOtpVerificationController(onResend?: () => void) {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useAppDispatch();

  const {source, phoneNumber} = (route.params ||
    {}) as OtpVerificationScreenParams;

  const [code, setCode] = useState('');
  const [resendCount, setResendCount] = useState(0);
  const otpLength = 6;

  const defaultOtp = '000000'; // default OTP for now

  const handleCodeChange = useCallback((newCode: string) => {
    setCode(newCode);
  }, []);

  const handleResend = useCallback(() => {
    setResendCount(count => count + 1);
    setCode('');
    if (onResend) onResend();
  }, [onResend]);

  const handleContinue = useCallback(() => {
    // Validate OTP (always 000000 here)
    if (code.length === otpLength && code === defaultOtp) {
      if (source === 'LogIn') {
        // Dispatch login success for dummy user
        dispatch(
          loginSuccess({
            id: '999',
            name: 'Dummy User',
            email: 'dummy@example.com',
            balance: 10000,
          }),
        );
        // Navigate to home or app main screen
      } else if (source === 'SignUp') {
        // Continue normal signup flow
        (navigation as any).navigate('AdditionalInfo', {phoneNumber});
      }
    }
  }, [code, dispatch, navigation, source, phoneNumber]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    code,
    setCode: handleCodeChange,
    handleResend,
    resendCount,
    handleContinue,
    handleGoBack,
    otpLength,
    defaultOtp,
  };
}
