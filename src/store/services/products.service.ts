import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateProduct, UpdateProduct } from '../../types/Products';

export const productsAPI = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: () => 'products',
        providesTags: (result) =>
            result
                ? [
                        ...result.map(({ id }: { id: number }) => ({ type: 'Products' as const, id })),
                        { type: 'Products', id: 'LIST' },
                    ]
                : [{ type: 'Products', id: 'LIST' }],
    }),
    getProductById: builder.query({
      query: (id: number) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
    createProduct: builder.mutation({
      query: (body: CreateProduct) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    updateProduct: builder.mutation({
      query: ({ body, id }: { body: UpdateProduct; id: number }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
} = productsAPI;
