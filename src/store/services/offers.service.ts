import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { CreateOffer, Offer } from '../../types/Offers';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: Offer[]; count: number },
      { limit?: number; page?: number; sortBy?: string; order?: string }
    >({
      query: ({ limit = 10, page = 1, sortBy, order }) => ({
        url: `/offers?limit=${limit}&page=${page}&sortBy=${sortBy}&order=${order}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    getAllByFarmer: builder.query<Offer[], { farmerId: number }>({
      query: ({ farmerId }) => ({
        url: `/offers/allByFarmer/${farmerId}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    getOneById: builder.query<Offer, { offerId: string }>({
      query: ({ offerId }) => ({
        url: `/offers/one/${offerId}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    create: builder.mutation<Offer, CreateOffer>({
      query: (body) => ({
        url: '/offers',
        method: 'POST',
        body,
        headers: {
          'Access-Control-Allow-Origin': '*',
          Cookie: document.cookie,
        },
      }),
    }),
    update: builder.mutation<Offer, CreateOffer>({
      query: (body) => ({
        url: '/offers',
        method: 'PUT',
        body,
        headers: {
          'Access-Control-Allow-Origin': '*',
          Cookie: document.cookie,
        },
      }),
    }),
    delete: builder.mutation<Offer, { offerId: number }>({
      query: ({ offerId }) => ({
        url: `/offers/${offerId}`,
        method: 'DELETE',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Cookie: document.cookie,
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
