import { ApiResponseTemplate } from '@/shared/types/response-data';
import { UserId, UsersQueryParams, UsersResponse } from '@/modules/users/types';
import { USERS, FOLLOW } from '@/shared/constants/query-endpoints';
import { DELETE, POST } from '@/shared/constants/query-methods';
import baseAPI from '@/redux/base-API';

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UsersQueryParams>({
      query: ({ usersQueryCount, currentPage }) =>
        `${USERS}?count=${usersQueryCount}&page=${currentPage}`,
      providesTags: ['Users'],
    }),

    unfollowUser: builder.mutation<ApiResponseTemplate, UserId>({
      query: (userId) => ({
        method: DELETE,
        url: `${FOLLOW}/${userId}`,
      }),
      // async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
      // await updateFollowStatusInCache({
      //   userId,
      //   dispatch,
      //   getState,
      //   queryFulfilled,
      //   usersApi,
      //   isFollowed: true,
      // });
      // },
      invalidatesTags: ['Users'],
    }),

    followUser: builder.mutation<ApiResponseTemplate, UserId>({
      query: (userId) => ({
        method: POST,
        url: `${FOLLOW}/${userId}`,
      }),

      // async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
      // await updateFollowStatusInCache({
      //   userId,
      //   dispatch,
      //   getState,
      //   queryFulfilled,
      //   usersApi,
      //   isFollowed: false,
      // });
      // },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} = usersApi;
