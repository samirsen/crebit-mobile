export type OtpVerificationSource = 'LogIn' | 'SignUp';

export interface OtpVerificationScreenParams {
  source: OtpVerificationSource;
  phoneNumber: string; // E.g. "+55 31 99488-7077"
}
