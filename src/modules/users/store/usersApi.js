import baseApi from '@/services/baseApi';
import * as endpoints from '@/shared/constants/api';

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
      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        const {
          users: { usersCount, currentPage },
        } = getState();

        const patchResult = dispatch(
          usersApi.util.updateQueryData(
            'getUsers',
            { usersCount, currentPage },
            (draft) => {
              const user = draft.items.find((user) => user.id === userId);
              if (user) {
                user.followed = false;
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
      invalidatesTags: ['Users'],
    }),

    followUser: builder.mutation({
      query: (userId) => ({
        method: 'POST',
        url: `${endpoints.FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        const {
          users: { usersCount, currentPage },
        } = getState();

        const patchResult = dispatch(
          usersApi.util.updateQueryData(
            'getUsers',
            { usersCount, currentPage },
            (draft) => {
              const user = draft.items.find((user) => user.id === userId);
              if (user) {
                user.followed = true;
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
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
