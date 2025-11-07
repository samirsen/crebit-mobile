import {useAppSelector} from '../../hooks/useAppSelector';
import {AppNavigatorState} from './AppNavigator.types';

export const useAppNavigatorController = (): AppNavigatorState => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return {
    isAuthenticated,
  };
};
