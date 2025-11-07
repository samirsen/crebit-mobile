import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountFormData {
  firstName: string;
  lastName: string;
  nativeCountry: string;
  phoneNumber: string;
  email: string;
}

export interface AccountState {
  formData: AccountFormData;
  isLoading: boolean;
  errors: Partial<AccountFormData>;
  isDirty: boolean;
}

const initialState: AccountState = {
  formData: {
    firstName: 'Beatriz',
    lastName: 'Sturn',
    nativeCountry: 'United States',
    phoneNumber: '+1 720 915 3289',
    email: 'beatriz@getcrebit.com',
  },
  isLoading: false,
  errors: {},
  isDirty: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof AccountFormData; value: string }>) => {
      const { field, value } = action.payload;
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
    
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isDirty = false;
    },
    
    markAsClean: (state) => {
      state.isDirty = false;
    },
  },
});

export const {
  updateField,
  setLoading,
  setErrors,
  resetForm,
  markAsClean,
} = accountSlice.actions;

export default accountSlice.reducer;
