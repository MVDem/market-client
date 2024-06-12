import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { CreateOffer, Offer, OfferCard } from '../../types/Offers';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/offers` }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: OfferCard[]; count: number },
      { limit?: number; page?: number; sortBy?: string; order?: string; search?: {columnName?: string; value?: string}} 
    >({
      query: ({ limit = 10, page = 1, sortBy, order, search}) => {
        const params = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        if (sortBy && sortBy.length) params.append('sortBy', sortBy);
        if (order && order.length) params.append('order', order);
        if (search?.columnName && search.columnName.length) params.append('columnName', search.columnName);
        if (search?.value && search.value.length) params.append('value', search.value);

        return {
          url: `?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
    getAllByFarmer: builder.query<Offer[], { farmerId: number }>({
      query: ({ farmerId }) => ({
        url: `/allByFarmer/${farmerId}`,
        method: 'GET',
      }),
    }),
    getFullOffers: builder.query<Offer[], number>({
      query: () => ({
        url: `/getfulloffers`,
        method: 'GET',
      }),
    }),
    getOneById: builder.query<Offer, { offerId: string }>({
      query: ({ offerId }) => ({
        url: `/${offerId}`,
        method: 'GET',
      }),
    }),
    create: builder.mutation<Offer, CreateOffer>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
        headers: {
          Cookie: document.cookie,
        },
      }),
    }),
    update: builder.mutation<Offer, CreateOffer>({
      query: (body) => ({
        url: '',
        method: 'PUT',
        body,
        headers: {
          Cookie: document.cookie,
        },
      }),
    }),
    delete: builder.mutation<Offer, { offerId: number }>({
      query: ({ offerId }) => ({
        url: `/${offerId}`,
        method: 'DELETE',
        headers: {
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
