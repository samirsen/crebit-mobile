import {OtpVerificationSource} from '../../screens/OtpVerification/OtpVerification.types';

// Root Auth Navigator
export type AuthStackParamList = {
  Landing: undefined;
  SignUpFlow: undefined;
  LoginFlow: undefined;
};

// Sign Up flow
export type SignUpStackParamList = {
  SignUp: undefined;
  OtpVerification: {source: OtpVerificationSource};
  CreatePassword: undefined;
  AdditionalInfo: undefined;
  SignUpComplete: undefined;
};

// Login flow
export type LoginStackParamList = {
  Login: undefined;
  OtpVerification: {source: OtpVerificationSource};
};

export interface AuthNavigatorProps {
  source?: OtpVerificationSource;
}
