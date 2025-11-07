export interface CurrencyFormatOptions {
  currency?: string;
  locale?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export interface CurrencyFormatter {
  formatCurrency(amount: number, options?: CurrencyFormatOptions): string;
  formatAmount(amount: number, options?: Omit<CurrencyFormatOptions, 'currency'>): string;
}
