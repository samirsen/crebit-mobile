import type { RootState } from '../../store/store';
import { TypedUseSelectorHook } from 'react-redux';

export type TypedAppSelector = TypedUseSelectorHook<RootState>;
