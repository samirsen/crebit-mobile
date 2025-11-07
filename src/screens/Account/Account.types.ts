export interface AccountFormData {
  firstName: string;
  lastName: string;
  nativeCountry: string;
  phoneNumber: string;
  email: string;
}

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface AccountState {
  formData: AccountFormData;
  isLoading: boolean;
  errors: Partial<AccountFormData>;
  isDirty: boolean;
}
