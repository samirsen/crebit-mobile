import {useCallback, useState, useMemo} from 'react';
import {AdditionalInfoForm} from './AdditionalInfo.types';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {
  updateSignUpData,
  clearSignUpData,
} from '../../store/slices/signUpSlice';
import {signUpUser, signUpComplete} from '../../services';

export function useAdditionalInfoController() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const signUpData = useAppSelector(state => state.signUp);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<AdditionalInfoForm>({
    street: signUpData.street,
    city: signUpData.city,
    state: signUpData.state,
    zip: signUpData.zip,
    country: signUpData.country,
  });

  const handleChange = useCallback(
    (field: keyof AdditionalInfoForm) => (text: string) => {
      setForm(prev => ({...prev, [field]: text}));
    },
    [],
  );

  const handleContinue = useCallback(async () => {
    try {
      // setIsLoading(true);

      // // Store address data in Redux first
      // dispatch(updateSignUpData({
      //   street: form.street,
      //   city: form.city,
      //   state: form.state,
      //   zip: form.zip,
      //   country: form.country,
      // }));

      // // Get all signup data from Redux
      // const completeSignUpData = {
      //   ...signUpData,
      //   street: form.street,
      //   city: form.city,
      //   state: form.state,
      //   zip: form.zip,
      //   country: form.country,
      // };

      // // Call Supabase signup first
      // const authResult = await signUpUser(completeSignUpData.email, completeSignUpData.password);

      // // Prepare customer data for API
      // const customerData = {
      //   first_name: completeSignUpData.firstName,
      //   last_name: completeSignUpData.lastName,
      //   email: completeSignUpData.email,
      //   phone_number: completeSignUpData.phoneNumber,
      //   type: "individual" as const,
      //   date_of_birth: completeSignUpData.dateOfBirth || "1993-01-05", // Default if not provided
      //   identity_documents: [
      //     {
      //       type: "national_id" as const,
      //       value: completeSignUpData.identityDocumentValue || "88987978877", // Default if not provided
      //       country: completeSignUpData.identityDocumentCountry || "BR"
      //     }
      //   ],
      //   address: {
      //     street_line_1: completeSignUpData.street,
      //     city: completeSignUpData.city,
      //     state: completeSignUpData.state,
      //     postal_code: completeSignUpData.zip,
      //     country: completeSignUpData.country
      //   }
      // };

      // // Call both APIs using Promise.allSettled
      // const result = await signUpComplete(customerData, authResult);

      // console.log('Signup results:', result);

      // // Clear signup data from Redux after successful completion
      // dispatch(clearSignUpData());

      // Navigate to success screen
      (navigation as any).navigate('SignUpComplete');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error appropriately - maybe show an alert
    } finally {
      setIsLoading(false);
    }
  }, [form, navigation, dispatch, signUpData]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Check if all required fields are filled
  const isFormValid = useMemo(() => {
    const requiredFields = [
      form.street.trim(),
      form.city.trim(),
      form.state.trim(),
      form.zip.trim(),
      form.country.trim(),
    ];

    return requiredFields.every(field => field.length > 0);
  }, [form.street, form.city, form.state, form.zip, form.country]);

  return {
    form,
    handleChange,
    handleContinue,
    handleGoBack,
    isLoading,
    isFormValid,
  };
}
