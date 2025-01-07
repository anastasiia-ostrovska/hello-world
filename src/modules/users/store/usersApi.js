import { baseAPI } from '@/redux';
import { USERS, FOLLOW } from '@/shared/constants/API-endpoints';
import updateFollowStatusInCache from '@/modules/users/store/helpers/updateFollowStatusInCache';

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ usersQueryCount, currentPage }) =>
        `${USERS}?count=${usersQueryCount}&page=${currentPage}`,
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
          isFollowed: true,
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
          isFollowed: false,
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
