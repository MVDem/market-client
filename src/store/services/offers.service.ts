import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config';
import {
  Offer,
  CreateOfferUpload,
  UpdateOfferUpload,
  UpdateOffer,
} from '../../types/Offers';

export const offersAPI = createApi({
  reducerPath: 'offersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/offers` }),
  endpoints: (builder) => ({
    getPaginatedSortedOffers: builder.query<
      { offers: Offer[]; count: number },
      {
        limit?: number;
        page?: number;
        sortBy?: string;
        order?: string;
        search?: { columnName?: string; value?: string };
      }
    >({
      query: ({ limit = 10, page = 1, sortBy, order, search }) => {
        const params = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        if (sortBy && sortBy.length) params.append('sortBy', sortBy);
        if (order && order.length) params.append('order', order);
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

    create: builder.mutation<Offer, CreateOfferUpload>({
      query: (body) => {
        const headers = new Headers();
        headers.append('Cookie', document.cookie);
        const formData = new FormData();
        formData.append('dto', JSON.stringify(body.dto));
        if (body.file) {
          formData.append('file', body.file);
          headers.append('Content-Type', 'multipart/form-data');
        }
        return {
          url: '',
          method: 'POST',
          body: formData,
          headers: headers,
          credentials: 'include',
        };
      },
    }),

    update: builder.mutation<
      Offer,
      { body?: UpdateOffer; id: number; file?: File }
    >({
      query: ({ body, id, file }) => {
        const headers = new Headers();
        headers.append('Cookie', document.cookie);
        const formData = new FormData();
        if (body) {
          // for (const key in body) {
          //   formData.append(key, body[key]);
          // }
          formData.append('dto', JSON.stringify(body.dto));
        }
        if (file) {
          formData.append('file', file);
          headers.append('Content-Type', 'multipart/form-data');
        }

        console.log(formData.get('isActive'));
        return {
          url: `/${id}`,
          method: 'PUT',
          body: formData,
          headers: headers,
          credentials: 'include',
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
  }),
});

export const {
  useGetPaginatedSortedOffersQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
  useGetByIdQuery,
} = offersAPI;
