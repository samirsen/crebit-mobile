import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SignUpState {
  // SignUp screen data
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  
  // CreatePassword screen data
  password: string;
  
  // OtpVerification screen data
  otp: string;
  
  // AdditionalInfo screen data
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  
  // Identity document data (for API)
  identityDocumentType: string;
  identityDocumentValue: string;
  identityDocumentCountry: string;
}

const initialState: SignUpState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
  password: '',
  otp: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  identityDocumentType: 'national_id',
  identityDocumentValue: '',
  identityDocumentCountry: 'BR',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    updateSignUpData: (state, action: PayloadAction<Partial<SignUpState>>) => {
      return {...state, ...action.payload};
    },
    clearSignUpData: () => initialState,
  },
});

export const {updateSignUpData, clearSignUpData} = signUpSlice.actions;
export default signUpSlice.reducer;
