import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useLoginController = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleContinue = useCallback(
    () => () =>
      (navigation as any).navigate('OtpVerification', {source: 'LogIn'}),
    [navigation],
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    form,
    handleChange,
    handleContinue,
    handleGoBack,
  };
};

