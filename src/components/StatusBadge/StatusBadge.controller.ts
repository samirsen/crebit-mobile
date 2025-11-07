import { colors } from '../../constants/colors';
import { StatusType, StatusConfig } from './StatusBadge.types';

export const useStatusBadgeController = () => {
  const getStatusConfig = (statusType: StatusType): StatusConfig => {
    switch (statusType) {
      case 'processing':
        return {
          text: 'Processing',
          backgroundColor: '#F5E6D3',
          textColor: '#B47300',
          iconColor: '#B47300',
        };
      case 'completed':
        return {
          text: 'Completed',
          backgroundColor: '#E6F3F3',
          textColor: colors.secondary,
          iconColor: colors.secondary,
        };
      case 'failed':
        return {
          text: 'Failed',
          backgroundColor: '#FFE6E6',
          textColor: colors.error,
          iconColor: colors.error,
        };
      case 'pending':
        return {
          text: 'Pending',
          backgroundColor: '#FFF3E6',
          textColor: colors.warning,
          iconColor: colors.warning,
        };
      default:
        return {
          text: 'Unknown',
          backgroundColor: '#F5F5F5',
          textColor: colors.text.muted,
          iconColor: colors.text.muted,
        };
    }
  };

  return {
    getStatusConfig,
  };
};
