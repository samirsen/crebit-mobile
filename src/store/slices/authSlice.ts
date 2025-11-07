import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: true, // User is logged in initially as per requirements
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    balance: 1250.75,
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.balance = action.payload;
      }
    },
  },
});

export const { setLoading, loginSuccess, logout, updateBalance } = authSlice.actions;
export default authSlice.reducer;



