import {OtpVerificationSource} from '../../../screens/OtpVerification/OtpVerification.types';

export type SignUpStackParamList = {
  SignUp: undefined;
  OtpVerification: {source: OtpVerificationSource};
  CreatePassword: undefined;
  AdditionalInfo: undefined;
  SignUpComplete: undefined;
};
