import {OtpVerificationSource} from '../../../screens/OtpVerification/OtpVerification.types';

export type LoginStackParamList = {
  Login: undefined;
  OtpVerification: {source: OtpVerificationSource};
};
