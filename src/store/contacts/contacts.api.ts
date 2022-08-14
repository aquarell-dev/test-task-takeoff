import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IContact } from './types';

export const contactsApi = createApi({
  reducerPath: 'contacts/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62f278bbb1098f1508139d57.mockapi.io/api/v1/' }),
  tagTypes: ['IContact'],
  endpoints: build => ({
    getContactsByUserId: build.query<IContact[], number>({
      query: (id: number) => ({
        url: `users/${id}/contacts`
      }),
      providesTags: ['IContact']
    }),
    createContact: build.mutation<void, IContact>({
      query: contact => ({
        url: `/users/${contact.userId}/contacts`,
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['IContact'],
    }),
    updateContact: build.mutation<void, IContact>({
      query: contact => ({
        url: `users/${contact.userId}/contacts/${contact.id}`,
        method: 'PUT',
        body: contact
      }),
      invalidatesTags: ['IContact'],
    }),
    deleteContactById: build.mutation<void, IContact>({
      query: contact => ({
        url: `users/${contact.userId}/contacts/${contact.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['IContact'],
    }),
  })
});

export const {
  useGetContactsByUserIdQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactByIdMutation
} = contactsApi;
