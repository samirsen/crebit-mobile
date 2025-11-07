import { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { ROUTE_STATUS_BAR_CONFIG } from './useStatusBar.config';

export const useStatusBarController = () => {
  const getCurrentRouteName = useCallback((state: any): string => {
    if (!state || !state.routes || state.routes.length === 0) {
      return '';
    }

    const route = state.routes[state.index];
    
    if (route.state) {
      // If there's a nested state, get the route from the nested state
      return getCurrentRouteName(route.state);
    }
    
    return route.name;
  }, []);

  const updateStatusBar = useCallback((routeName: string) => {
    const config = ROUTE_STATUS_BAR_CONFIG[routeName] || ROUTE_STATUS_BAR_CONFIG.default;
    
    StatusBar.setBarStyle(config.barStyle, true);
    StatusBar.setBackgroundColor(config.backgroundColor, true);
  }, []);

  return {
    getCurrentRouteName,
    updateStatusBar,
  };
};
