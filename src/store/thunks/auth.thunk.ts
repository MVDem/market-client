import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { API_URL } from '../../config';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (
    { login, password }: Pick<User, 'login' | 'password'>,
    { rejectWithValue }
  ) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: login,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
    return response;
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
    return response;
  }
);
