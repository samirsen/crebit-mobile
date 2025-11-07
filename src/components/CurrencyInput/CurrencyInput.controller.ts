import { useCallback } from 'react';

export const useCurrencyInputController = (
  isEditable: boolean,
  onAmountChange?: (amount: string) => void
) => {
  const handleAmountChange = useCallback((text: string) => {
    if (isEditable && onAmountChange) {
      const numericValue = text.replace(/[^0-9.]/g, '');
      onAmountChange(numericValue);
    }
  }, [isEditable, onAmountChange]);

  const getShowPrefix = useCallback((label: string) => {
    return label.toUpperCase().includes('SEND');
  }, []);

  return {
    handleAmountChange,
    getShowPrefix,
  };
};
