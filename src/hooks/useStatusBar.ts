import { useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { useStatusBarController } from './useStatusBar/useStatusBar.controller';

export const useStatusBar = () => {
  const navigationState = useNavigationState(state => state);
  const { getCurrentRouteName, updateStatusBar } = useStatusBarController();

  useEffect(() => {
    if (!navigationState) return;

    const currentRoute = getCurrentRouteName(navigationState);
    updateStatusBar(currentRoute);
  }, [navigationState, getCurrentRouteName, updateStatusBar]);
};


