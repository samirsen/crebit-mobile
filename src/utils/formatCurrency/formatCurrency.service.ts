import {CurrencyFormatOptions} from './formatCurrency.types';
import {DEFAULT_CURRENCY_OPTIONS} from './formatCurrency.config';

export const formatCurrency = (
  amount: number,
  options: CurrencyFormatOptions = {},
): string => {
  const {currency, locale} = {...DEFAULT_CURRENCY_OPTIONS, ...options};

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatAmount = (
  amount: number,
  options: Omit<CurrencyFormatOptions, 'currency'> = {},
): string => {
  const {locale, minimumFractionDigits, maximumFractionDigits} = {
    ...DEFAULT_CURRENCY_OPTIONS,
    ...options,
  };

  return amount.toLocaleString(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};
