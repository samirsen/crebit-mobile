import { useCallback } from 'react';
import { CountryOption } from './CountrySelectModal.types';

export const useCountrySelectModalController = (
  onSelect: (country: CountryOption) => void,
  onClose: () => void
) => {
  const handleCountryPress = useCallback((country: CountryOption) => {
    onSelect(country);
    onClose();
  }, [onSelect, onClose]);

  const renderSeparator = useCallback(() => ({ height: 20 }), []);

  return {
    handleCountryPress,
    renderSeparator,
  };
};
