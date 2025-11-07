import { useMemo } from 'react';

export const useMemoizedValueController = <T>(value: T, deps: React.DependencyList): T => {
  return useMemo(() => value, deps);
};
