import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import { Offer } from '../../types/Offers';
import { SearchState } from '../slices/search.slice';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/offers` }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: Offer[]; count: number },
      { stateParams: SearchState }
    >({
      query: ({ stateParams }) => {
        const { pagination, search, sort } = stateParams;
        const params = new URLSearchParams({
          limit: pagination.limit.toString(),
          page: pagination.page.toString(),
        });
        if (sort.columnName && sort.columnName.length)
          params.append('sortBy', sort.columnName);
        if (sort.order && sort.order.length) params.append('order', sort.order);
        if (search?.columnName && search.columnName.length)
          params.append('columnName', search.columnName);
        if (search?.value && search.value.length)
          params.append('value', search.value);

        return {
          url: `?${params.toString()}`,
          method: 'GET',
        };
      },
    }),

    create: builder.mutation<Offer, { body?: FormData }>({
      query: (body) => {
        return {
          url: '',
          method: 'POST',
          body: body.body,
          credentials: 'include',
          formData: true,
        };
      },
    }),

    update: builder.mutation<Offer, { body?: FormData; id: number }>({
      query: ({ body, id }) => {
        return {
          url: `/${id}`,
          method: 'PUT',
          body: body,
          credentials: 'include',
          formData: true,
        };
      },
    }),

    delete: builder.mutation<Offer, { offerId: number }>({
      query: ({ offerId }) => ({
        url: `/${offerId}`,
        method: 'DELETE',
        credentials: 'include',
        headers: {
          Cookie: document.cookie,
        },
      }),
    }),

    getById: builder.query<Offer, { offerId: number }>({
      query: ({ offerId }) => ({
        url: `/${offerId}`,
        method: 'GET',
      }),
    }),

    getByCategoryId: builder.query<
      { offers: Offer[]; count: number },
      {
        limit?: number;
        page?: number;
        sortBy?: string;
        order?: string;
        categoryId: number;
      }
    >({
      query: ({ limit = 10, page = 1, sortBy, order, categoryId }) => {
        const params = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        console.log('🚀 ~ params:', params);
        if (sortBy && sortBy.length) params.append('sortBy', sortBy);
        if (order && order.length) params.append('order', order);
        if (categoryId) params.append('categoryId', categoryId.toString());
        console.log('🚀 ~ categoryId:', categoryId);
        return {
          url: `?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetPaginatedSortedOffersQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
  useGetByIdQuery,
  useGetByCategoryIdQuery,
} = offersAPI;
