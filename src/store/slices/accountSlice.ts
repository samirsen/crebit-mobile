import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AccountFormData {
  firstName: string;
  lastName: string;
  nativeCountry: string;
  phoneNumber: string;
  email: string;
}

export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  date_of_birth: string;
  national_id: string;
  country: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  unblockpay_customer_id: string;
  created_at: string;
  updated_at: string;
  wallet_id: string;
  wallet_address: string;
}

export interface AccountState {
  formData: AccountFormData;
  userProfile: UserProfile | null;
  isLoading: boolean;
  errors: Partial<AccountFormData>;
  isDirty: boolean;
}

const initialState: AccountState = {
  formData: {
    firstName: '',
    lastName: '',
    nativeCountry: '',
    phoneNumber: '',
    email: '',
  },
  userProfile: null,
  isLoading: false,
  errors: {},
  isDirty: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{field: keyof AccountFormData; value: string}>,
    ) => {
      const {field, value} = action.payload;
      state.formData[field] = value;
      state.isDirty = true;

      // Clear error for this field when user starts typing
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setErrors: (state, action: PayloadAction<Partial<AccountFormData>>) => {
      state.errors = action.payload;
    },

    resetForm: state => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isDirty = false;
    },

    markAsClean: state => {
      state.isDirty = false;
    },

    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
      
      // Map country code to country name
      const countryMap: Record<string, string> = {
        'US': 'United States',
        'MX': 'Mexico', 
        'BR': 'Brazil',
      };
      
      // Update form data with profile data
      state.formData = {
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        nativeCountry: countryMap[action.payload.country] || action.payload.country,
        phoneNumber: action.payload.phone,
        email: action.payload.email,
      };
    },

    clearUserProfile: state => {
      state.userProfile = null;
      state.formData = initialState.formData;
      state.isDirty = false;
      state.errors = {};
    },
  },
});

export const {updateField, setLoading, setErrors, resetForm, markAsClean, setUserProfile, clearUserProfile} =
  accountSlice.actions;

export default accountSlice.reducer;
