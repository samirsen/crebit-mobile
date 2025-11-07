import { useAppSelector } from '../../hooks/useAppSelector';
import { RootNavigatorState } from './RootNavigator.types';

export const useRootNavigatorController = (): RootNavigatorState => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return {
    isAuthenticated,
  };
};
