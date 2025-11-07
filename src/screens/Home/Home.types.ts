export interface HomeProps {}

export type SectionType = 'crebit' | 'compare';

export interface CurrencyData {
  code: string;
  name: string;
  flag: string;
}

export interface ExchangeRate {
  from: CurrencyData;
  to: CurrencyData;
  rate: number;
  amount: number;
}

export interface HomeState {
  activeSection: SectionType;
  exchangeRate: ExchangeRate;
  sendAmount: string;
  receiveAmount: string;
}
