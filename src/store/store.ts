import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import searchReducer from './slices/search.slice';
import { offersAPI } from './services/offers.service';
import { productsAPI } from './services/products.service';
import { farmersAPI } from './services/farmers.service';
import { categoriesAPI } from './services/categories.service';

const store = configureStore({
  reducer: {
    authReducer,
    searchReducer,
    [offersAPI.reducerPath]: offersAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [farmersAPI.reducerPath]: farmersAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      offersAPI.middleware,
      productsAPI.middleware,
      farmersAPI.middleware,
      categoriesAPI.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
