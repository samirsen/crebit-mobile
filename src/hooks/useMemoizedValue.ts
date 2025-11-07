import { useMemo } from 'react';

export const useMemoizedValue = <T>(value: T, deps: React.DependencyList): T => {
  return useMemo(() => value, deps);
};



