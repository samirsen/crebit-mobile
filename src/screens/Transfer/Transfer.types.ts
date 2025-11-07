export interface TransferState {
  monthlyConversions: string;
  lifetimeConversions: string;
  transactions: Array<{
    id: string;
    recipient: string;
    amount: string;
    currency: string;
    date: string;
    time: string;
    status: 'processing' | 'completed' | 'failed' | 'pending';
    showReceipt?: boolean;
  }>;
}

export interface TransferProps {
  // Add any props if needed in the future
}

export interface TransferController {
  transferState: TransferState;
  handleScheduleCall: () => void;
  handleViewReceipt: (transactionId: string) => void;
}
