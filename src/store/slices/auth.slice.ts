import { createSlice } from '@reduxjs/toolkit';
import { Farmer } from '../../types/User';
import { fetchLogin, fetchLogout } from '../thunks/auth.thunk';

interface AuthState {
  user: Farmer | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Logout
      .addCase(fetchLogout.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = null;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
      })

      // Login
      .addCase(fetchLogin.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        console.log(action.payload);
        state.user = null;
        state.loading = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
export const {} = authSlice.actions;
