import baseAPI from '@/store/base-API';
import { USERS, FOLLOW } from '@/shared/constants/API-endpoints';
import updateFollowStatusInCache from '@/modules/users/utils/updateFollowStatusInCache';

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ usersPerPageCount, currentPage }) =>
        `${USERS}?count=${usersPerPageCount}&page=${currentPage}`,
      providesTags: ['Users'],
    }),

    unfollowUser: builder.mutation({
      query: (userId) => ({
        method: 'DELETE',
        url: `${FOLLOW}/${userId}`,
      }),
      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        await updateFollowStatusInCache({
          userId,
          dispatch,
          getState,
          queryFulfilled,
          usersApi,
          isFollowed: false,
        });
      },
      invalidatesTags: ['Users'],
    }),

    followUser: builder.mutation({
      query: (userId) => ({
        method: 'POST',
        url: `${FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        await updateFollowStatusInCache({
          userId,
          dispatch,
          getState,
          queryFulfilled,
          usersApi,
          isFollowed: true,
        });
      },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} = usersApi;
