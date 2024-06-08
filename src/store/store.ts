import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import { offersAPI } from './services/offers.service';
import { productsAPI } from './services/products.service';
import { farmersAPI } from './services/farmers.service';

const store = configureStore({
  reducer: {
    authReducer,
    [offersAPI.reducerPath]: offersAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [farmersAPI.reducerPath]: farmersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersAPI.middleware, productsAPI.middleware, farmersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
