// src/screens/Login/useLoginController.ts
import {useState, useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {loginWithEmail, loginWithPhone} from '../../utils/subabase/auth';
import {Alert, ScrollView, TextInput} from 'react-native';
import {loginSuccess} from '../../store/slices/authSlice';
import {useAppDispatch} from '../../hooks';

export const useLoginController = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    phoneNumber: '',
    email: '',
    password: '',
  });

  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const scrollRef = useRef<ScrollView>(null);

  // Update form
  const handleChange = useCallback(
    (field: keyof typeof form) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  // Scroll to specific position
  const handleScrollTo = (y: number) => {
    scrollRef.current?.scrollTo({y, animated: true});
  };

  // Input submit focusing
  const handleSubmitEditing = useCallback(
    (field: keyof typeof form) => {
      switch (field) {
        case 'phoneNumber':
          scrollRef.current?.scrollTo({y: 50, animated: true});
          emailRef.current?.focus();
          break;
        case 'email':
          scrollRef.current?.scrollTo({y: 110, animated: true});
          passwordRef.current?.focus();
          break;
        case 'password':
          handleContinue();
          break;
      }
    },
    [emailRef, passwordRef],
  );

  // LOGIN LOGIC
  const handleContinue = useCallback(async () => {
    if (!form.password) {
      Alert.alert('Error', 'Password is required.');
      return;
    }

    setLoading(true);

    let result;

    // Prioritize email login
    if (form.email.trim()) {
      result = await loginWithEmail(form.email.trim(), form.password.trim());
    }
    // Else try phone login
    else if (form.phoneNumber.trim()) {
      result = await loginWithPhone(
        form.phoneNumber.trim(),
        form.password.trim(),
      );
    } else {
      Alert.alert('Missing Info', 'Please enter Email or Phone Number');
      setLoading(false);
      return;
    }

    const {data, error} = result;

    if (error) {
      Alert.alert('Login Failed', error.message);
      setLoading(false);
      return;
    }
    dispatch(
      loginSuccess({
        id: '999',
        name: 'Dummy User',
        email: 'dummy@example.com',
        balance: 10000,
      }),
    );
    // // Navigate to OTP screen (Supabase sends OTP automatically)
    // (navigation as any).navigate('OtpVerification', {
    //   source: 'LogIn',
    //   phoneNumber: form.phoneNumber,
    //   email: form.email,
    // });

    setLoading(false);
  }, [form, navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    form,
    handleChange,
    handleContinue,
    handleGoBack,
    loading,
    phoneRef,
    emailRef,
    passwordRef,
    scrollRef,
    handleSubmitEditing,
    handleScrollTo,
  };
};
