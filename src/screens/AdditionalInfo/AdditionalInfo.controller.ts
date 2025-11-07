import {useCallback, useState} from 'react';
import {AdditionalInfoForm} from './AdditionalInfo.types';
import {useNavigation} from '@react-navigation/native';

export function useAdditionalInfoController() {
  const navigation = useNavigation();
  const [form, setForm] = useState<AdditionalInfoForm>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = useCallback(
    (field: keyof AdditionalInfoForm) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleContinue = useCallback(() => {
    (navigation as any).navigate('SignUpComplete');
    // For now, just console log, later wire
    console.log('Continue with', form);
  }, [form, navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    form,
    handleChange,
    handleContinue,
    handleGoBack,
  };
}
