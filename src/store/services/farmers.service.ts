import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Farmer } from '../../types/Farmers';
import { API_URL } from '../../config';

export const farmersAPI = createApi({
  reducerPath: 'farmersApi',
  tagTypes: ['Farmers'],
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/farmers/` }),
  endpoints: (builder) => ({
    getFarmers: builder.query({
      query: () => '',
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
        url: `/one/${id}`,
      }),
    }),

    updateFarmer: builder.mutation({
      query: ({ body, id }: { body: Omit<Farmer, 'userId'>; id: number }) => ({
        url: `${id}`,
        method: 'PUT',
        credentials: 'include',
        body,
      }),
      invalidatesTags: [{ type: 'Farmers', id: 'LIST' }],
    }),

    // deleteFarmer: builder.mutation({
    //   query: (id: number) => ({
    //     url: `/farmers/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: [{ type: 'Farmers', id: 'LIST' }],
    // }),
  }),
});

export const {
  useGetFarmersQuery,
  useGetFarmerByIdQuery,
  useUpdateFarmerMutation,
  // useDeleteFarmerMutation,
} = farmersAPI;
