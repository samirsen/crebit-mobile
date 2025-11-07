import { useState, useCallback } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logger } from '../../utils/logger';
import type { SectionType, HomeState, CurrencyData } from './Home.types';

export const useHomeController = () => {
  const user = useAppSelector(state => state.auth.user);

  const [homeState, setHomeState] = useState<HomeState>({
    activeSection: 'crebit',
    exchangeRate: {
      from: { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
      to: { code: 'USD', name: 'United States Dollar', flag: '🇺🇸' },
      rate: 5.3458,
      amount: 1,
    },
    sendAmount: '5.404',
    receiveAmount: '1.00',
  });

  const handleSectionChange = useCallback((section: SectionType) => {
    logger.info(`Section changed to: ${section}`);
    setHomeState(prev => ({
      ...prev,
      activeSection: section,
    }));
  }, []);

  const handleSwapCurrencies = useCallback(() => {
    logger.info('Swapping currencies');
    setHomeState(prev => ({
      ...prev,
      exchangeRate: {
        ...prev.exchangeRate,
        from: prev.exchangeRate.to,
        to: prev.exchangeRate.from,
        rate: 1 / prev.exchangeRate.rate,
      },
      sendAmount: prev.receiveAmount,
      receiveAmount: prev.sendAmount,
    }));
  }, []);

  const handleSendAmountChange = useCallback((amount: string) => {
    const numAmount = parseFloat(amount) || 0;
    const receiveAmount = (numAmount / homeState.exchangeRate.rate).toFixed(2);
    
    setHomeState(prev => ({
      ...prev,
      sendAmount: amount,
      receiveAmount,
    }));
  }, [homeState.exchangeRate.rate]);

  const handleExchangeInitiation = useCallback(() => {
    logger.info('Exchange initiated via swipe');
    // TODO: Navigate to transfer screen or show confirmation modal
    // For now, just log the action
    console.log('Exchange initiated:', {
      from: homeState.exchangeRate.from,
      to: homeState.exchangeRate.to,
      sendAmount: homeState.sendAmount,
      receiveAmount: homeState.receiveAmount,
      rate: homeState.exchangeRate.rate,
    });
  }, [homeState.exchangeRate, homeState.sendAmount, homeState.receiveAmount]);

  return {
    user,
    homeState,
    handleSectionChange,
    handleSwapCurrencies,
    handleSendAmountChange,
    handleExchangeInitiation,
  };
};
