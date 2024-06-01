import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import { offersAPI } from './services/offers.service';

const store = configureStore({
  reducer: {
    authReducer,
    [offersAPI.reducerPath]: offersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
