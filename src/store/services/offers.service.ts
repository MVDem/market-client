import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { Offer } from '../../types/Offers';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: Offer[]; count: number },
      { limit?: number; page?: number }
    >({
      query: ({ limit = 10, page = 1 }) => ({
        url: `/offers?limit=${limit}&page=${page}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    getAllByFarmer: builder.query<Offer[], { farmerId: number }>({
      query: ({ farmerId }) => ({
        url: `/offers/allbyfarmer/${farmerId}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    getOneById: builder.query<Offer[], { offerId: number }>({
      query: ({ offerId }) => ({
        url: `/offers/one/${offerId}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
  }),
});

export const {
  useGetPaginatedSortedOffersQuery,
  useGetAllByFarmerQuery,
  useGetOneByIdQuery,
} = offersAPI;
