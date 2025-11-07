import { CurrencyFormatOptions } from './formatCurrency.types';

export const DEFAULT_CURRENCY_OPTIONS: Required<CurrencyFormatOptions> = {
  currency: 'USD',
  locale: 'en-US',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
