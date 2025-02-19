import { AppDispatch, RootState } from '@/app/store';
import {
  ApiResponseTemplate,
  baseAPI,
  DELETE,
  FOLLOW,
  POST,
  USERS,
} from '@/shared/api';
import { User, UsersQueryParams, UsersResponse } from '../model/types';

interface UpdateFollowStatusCacheParams {
  state: RootState;
  dispatch: AppDispatch;
  usersApi: typeof usersApi;
  userId: User['id'];
}

const updateFollowStatusCache = ({
  state,
  dispatch,
  usersApi,
  userId,
}: UpdateFollowStatusCacheParams) => {
  const { queries } = state.api;
  const getUsersQuery = Object.values(queries).find((query) => {
    return query?.endpointName === 'getUsers';
  });

  if (!getUsersQuery?.originalArgs) {
    throw new Error('Failed to find the query arguments for getUsers');
  }

  const { usersQueryCount, currentPage } =
    getUsersQuery.originalArgs as UsersQueryParams;

  return dispatch(
    usersApi.util.updateQueryData(
      'getUsers',
      { usersQueryCount, currentPage },
      (draft: UsersResponse) => {
        const user = draft.items.find((user) => user.id === userId);

        if (user) {
          user.followed = !user.followed;
        }
      }
    )
  );
};

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UsersQueryParams>({
      query: ({ usersQueryCount, currentPage }) =>
        `${USERS}?count=${usersQueryCount}&page=${currentPage}`,
      providesTags: ['Users'],
    }),

    unfollowUser: builder.mutation<ApiResponseTemplate, User['id']>({
      query: (userId) => ({
        method: DELETE,
        url: `${FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        const patchResult = updateFollowStatusCache({
          state: getState() as RootState,
          dispatch,
          usersApi,
          userId,
        });

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    followUser: builder.mutation<ApiResponseTemplate, User['id']>({
      query: (userId) => ({
        method: POST,
        url: `${FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        const patchResult = updateFollowStatusCache({
          state: getState() as RootState,
          dispatch,
          usersApi,
          userId,
        });

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} = usersApi;
