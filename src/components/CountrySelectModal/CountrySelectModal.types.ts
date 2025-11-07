export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface CountrySelectModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: CountryOption) => void;
  countries: CountryOption[];
  selectedCountry?: CountryOption;
  title?: string;
}
