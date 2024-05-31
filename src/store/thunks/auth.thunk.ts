import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { API_URL, SERVER_STATUS } from '../../config';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (
    { login, password }: Pick<User, 'login' | 'password'>,
    { rejectWithValue }
  ) => {
    // Mock data===================================
    if (SERVER_STATUS === 'OFF') {
      if (login !== 'bob@gmail.com' || password !== '12345') {
        throw rejectWithValue('login or password is not correct');
      }
      return _mockData;
    }
    //==========================================

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
    // Mock data===================================
    if (SERVER_STATUS === 'OFF') {
      return true;
    }
    //==========================================
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

const _mockData = {
  id: 1,
  name: 'Bob',
  description: 'I am a farmer',
  city: 'New York',
  address: '1234 5th Ave',
  email: 'bob@gmail.com',
  phone: '123-456-7890',
  coordinateLat: '40.7128',
  coordinateLong: '74.0060',
  userId: 1,
  imageURL: 'https://www.google.com',
  createdAt: '2021-09-01T00:00:00.000Z',
  updatedAt: '2021-09-01T00:00:00.000Z',
  offers: [],
};
