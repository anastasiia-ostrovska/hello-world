import baseApi from '@/services/baseApi';
import * as endpoints from '@/constants/api';

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ usersCount, currentPage }) =>
        `${endpoints.USERS}?count=${usersCount}&page=${currentPage}`,
      providesTags: ['Users'],
    }),
    unfollowUser: builder.mutation({
      query: (userId) => ({
        method: 'DELETE',
        url: `${endpoints.FOLLOW}/${userId}`,
      }),
      invalidatesTags: ['Users'],
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        method: 'POST',
        url: `${endpoints.FOLLOW}/${userId}`,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} = usersApi;
