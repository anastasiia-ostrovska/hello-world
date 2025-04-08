import type { AppDispatch, RootState } from '@app/store';
import {
  ApiSuccessResponse,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import {
  EditedUserData,
  User,
  UsersData,
  UsersQueryParams,
  UserWithInfo,
} from '../model/types';

type UsersResponse = ApiSuccessResponse<UsersData>;
type UserResponse = ApiSuccessResponse<UserWithInfo>;
type FollowUserResponse = ApiSuccessResponse<UserWithInfo['following']>;

interface UpdateFollowStatusCacheParams {
  state: RootState;
  dispatch: AppDispatch;
  userApi: typeof userApi;
  userId: User['id'];
}

const updateFollowStatusCache = ({
  state,
  dispatch,
  userApi,
  userId,
}: UpdateFollowStatusCacheParams) => {
  const { queries } = state.api;
  const getUsersQuery = Object.values(queries).find((query) => {
    return query?.endpointName === 'getUsers';
  });

  if (!getUsersQuery?.originalArgs) {
    throw new Error('Failed to find the query arguments for getUsers');
  }

  const { usersPerPage, currentPage, searchedUser, isFollowedByMe } =
    getUsersQuery.originalArgs as UsersQueryParams;

  return dispatch(
    userApi.util.updateQueryData(
      'users',
      { usersPerPage, currentPage, searchedUser, isFollowedByMe },
      (draft: UsersResponse) => {
        const user = draft.data.users.find((user) => user.id === userId);

        if (user) {
          user.isFollowedByMe = !user.isFollowedByMe;
        }
      }
    )
  );
};

const userApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<UsersResponse, UsersQueryParams>({
      query: ({
        usersPerPage,
        currentPage,
        searchedUser = '',
        isFollowedByMe = false,
      }) => ({
        url: `${ENDPOINTS.USERS}?count=${usersPerPage}&page=${currentPage}&search=${searchedUser}&isFollowedByMe=${isFollowedByMe}`,
      }),
      providesTags: [TAGS.USERS],
    }),

    userMe: builder.query<UserResponse, void>({
      query: () => ({
        url: ENDPOINTS.USER_ME,
      }),
      providesTags: [TAGS.USER],
    }),

    userById: builder.query<UserResponse, User['id']>({
      query: (userId) => ({
        url: `${ENDPOINTS.USER}/${userId}`,
      }),
      providesTags: [TAGS.USER],
    }),

    updateUser: builder.mutation<UserResponse, EditedUserData>({
      query: (editedUserData) => ({
        method: METHODS.PUT,
        url: ENDPOINTS.USER,
        body: editedUserData,
      }),
    }),

    followUser: builder.mutation<FollowUserResponse, User['id']>({
      query: (userId) => ({
        method: METHODS.PUT,
        url: `${ENDPOINTS.USER_FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, getState, queryFulfilled }) {
        const patchResult = updateFollowStatusCache({
          state: getState() as RootState,
          dispatch,
          userApi,
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
  useUsersQuery,
  useUserMeQuery,
  useUserByIdQuery,
  useFollowUserMutation,
} = userApi;
