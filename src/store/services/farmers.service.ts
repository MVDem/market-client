import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Farmer } from '../../types/Farmers';

export const farmersAPI = createApi({
  reducerPath: 'farmersApi',
  tagTypes: ['Farmers'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getFarmers: builder.query({
      query: () => 'farmers',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: 'Farmers' as const,
                id,
              })),
              { type: 'Farmers', id: 'LIST' },
            ]
          : [{ type: 'Farmers', id: 'LIST' }],
    }),

    getFarmerById: builder.query({
      query: (id: string) => ({
        url: `farmers/one/${id}`,
      }),
    }),

    createFarmer: builder.mutation({
      query: (body: Pick<Farmer, 'email' | 'userId'>) => ({
        url: 'farmers',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Farmers', id: 'LIST' }],
    }),

    updateFarmer: builder.mutation({
      query: ({ body, id }: { body: Omit<Farmer, 'userId'>; id: number }) => ({
        url: `farmers/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Farmers', id: 'LIST' }],
    }),

    deleteFarmer: builder.mutation({
      query: (id: number) => ({
        url: `/farmers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Farmers', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetFarmersQuery,
  useGetFarmerByIdQuery,
  useCreateFarmerMutation,
  useUpdateFarmerMutation,
  useDeleteFarmerMutation,
} = farmersAPI;
