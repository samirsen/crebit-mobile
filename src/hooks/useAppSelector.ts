import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store/store';

/**
 * Typed version of useSelector hook for Redux store
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



