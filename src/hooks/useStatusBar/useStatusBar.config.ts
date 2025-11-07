import { colors } from '../../constants/colors';
import { RouteStatusBarMap } from './useStatusBar.types';

export const ROUTE_STATUS_BAR_CONFIG: RouteStatusBarMap = {
  Home: {
    barStyle: 'light-content',
    backgroundColor: colors.background,
  },
  Transfer: {
    barStyle: 'dark-content',
    backgroundColor: colors.surface,
  },
  Account: {
    barStyle: 'dark-content',
    backgroundColor: colors.surface,
  },
  default: {
    barStyle: 'light-content',
    backgroundColor: colors.background,
  },
};
