import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { Category } from '../../types/Category';

export const categoriesAPI = createApi({
  reducerPath: 'categoriesApi',
  tagTypes: ['categories'],
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/categories/` }),
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[]; count: number }, {}>(
      {
        query: () => ({
          url: ``,
        }),
      },
    ),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
