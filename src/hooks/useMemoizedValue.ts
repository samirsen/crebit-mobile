import { useMemoizedValueController } from './useMemoizedValue/useMemoizedValue.controller';

export const useMemoizedValue = <T>(value: T, deps: React.DependencyList): T => {
  return useMemoizedValueController(value, deps);
};



