import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { API_URL } from '../../config';
import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (
    { email, password, role }: Pick<User, 'email' | 'password' | 'role'>,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post('/auth/signup', {
        email: email,
        password: password,
        role: role,
      });

      if (response.status !== 201) {
        throw new Error(response.data);
      }

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      const message =
        (err.response?.data as { message: string }).message || err.message;
      return rejectWithValue(message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (
    { email, password }: Pick<User, 'email' | 'password'>,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post('/auth/signin', {
        email: email,
        password: password,
      });

      if (response.status !== 200) {
        throw new Error(response.data);
      }

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      const message =
        (err.response?.data as { message: string }).message || err.message;
      return rejectWithValue(message);
    }
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
