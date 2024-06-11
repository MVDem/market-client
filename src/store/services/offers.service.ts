import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { CreateOffer, Offer, OfferCard } from '../../types/Offers';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: OfferCard[]; count: number },
      { limit?: number; page?: number; sortBy?: string; order?: string }
    >({
      query: ({ limit = 10, page = 1, sortBy, order }) => {
        const params = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        if (sortBy && sortBy.length) params.append('sortBy', sortBy);
        if (order && order.length) params.append('order', order);

        return {
          url: `/offers?${params.toString()}`,
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };
      },
    }),
    getAllByFarmer: builder.query<Offer[], { farmerId: number }>({
      query: ({ farmerId }) => ({
        url: `/offers/allByFarmer/${farmerId}`,
        method: 'GET',
      }),
    }),
    getFullOffers: builder.query<Offer[], number>({
      query: () => ({
        url: `/offers/getfulloffers`,
        method: 'GET',
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
  useGetFullOffersQuery,
} = offersAPI;
