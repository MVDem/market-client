import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';

export const categoriesAPI = createApi({
  reducerPath: 'categoriesApi',
  tagTypes: ['categories'],
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/categories/` }),
  endpoints: (builder) => ({
    // getCategories: builder.query({
    //   query: () => '',
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ id }: { id: number }) => ({
    //             type: 'categories' as const,
    //             id,
    //           })),
    //           { type: 'categories', id: 'LIST' },
    //         ]
    //       : [{ type: 'categories', id: 'LIST' }],
    // }),
    getCategories: builder.query({
      query: () => ({
        url: ``,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
