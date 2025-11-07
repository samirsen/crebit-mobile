import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

/**
 * Typed version of useDispatch hook for Redux store
 * @returns Typed dispatch function
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();



