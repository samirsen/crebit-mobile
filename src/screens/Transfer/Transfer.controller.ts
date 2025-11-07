import { useState, useCallback } from 'react';
import { TransferState, TransferController } from './Transfer.types';

export const useTransferController = (): TransferController => {
  const [transferState] = useState<TransferState>({
    monthlyConversions: '1,235.00',
    lifetimeConversions: '7,235.00',
    transactions: [
      {
        id: '1',
        recipient: 'Chase - ****4521',
        amount: '30.57',
        currency: 'USD',
        date: '08/29/2025',
        time: '3.23pm',
        status: 'processing',
        showReceipt: false,
      },
      {
        id: '2',
        recipient: 'Chase - ****4521',
        amount: '1852.20',
        currency: 'USD',
        date: '08/29/2025',
        time: '3.23pm',
        status: 'completed',
        showReceipt: true,
      },
      {
        id: '3',
        recipient: 'Chase - ****4521',
        amount: '1852.20',
        currency: 'USD',
        date: '08/29/2025',
        time: '3.23pm',
        status: 'completed',
        showReceipt: true,
      },
      {
        id: '4',
        recipient: 'Wells Fargo - ****7890',
        amount: '500.00',
        currency: 'USD',
        date: '08/28/2025',
        time: '2.15pm',
        status: 'completed',
        showReceipt: true,
      },
      {
        id: '5',
        recipient: 'Bank of America - ****1234',
        amount: '750.25',
        currency: 'USD',
        date: '08/27/2025',
        time: '11.45am',
        status: 'completed',
        showReceipt: true,
      },
    ],
  });

  const handleScheduleCall = useCallback(() => {
    // TODO: Implement schedule call functionality
    console.log('Schedule call pressed');
  }, []);

  const handleViewReceipt = useCallback((transactionId: string) => {
    // TODO: Implement view receipt functionality
    console.log('View receipt for transaction:', transactionId);
  }, []);

  return {
    transferState,
    handleScheduleCall,
    handleViewReceipt,
  };
};
