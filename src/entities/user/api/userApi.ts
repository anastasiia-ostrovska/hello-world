import {
  ApiSuccessResponse,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import {
  EditedUserData,
  UserId,
  UsersListData,
  UsersListFilters,
  UserWithInfo,
} from '../model/types';

type UserResponse = ApiSuccessResponse<UserWithInfo>;
type UsersListResponse = ApiSuccessResponse<UsersListData>;
type FollowUserResponse = ApiSuccessResponse<UserWithInfo['following']>;

const userApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    userMe: builder.query<UserResponse, void>({
      query: () => ({
        url: ENDPOINTS.USER_ME,
      }),
      providesTags: [TAGS.USER_ME],
    }),

    userById: builder.query<UserResponse, UserId>({
      query: (userId) => ({
        url: `${ENDPOINTS.USER}/${userId}`,
      }),
      providesTags: [TAGS.USER],
    }),

    usersList: builder.query<UsersListResponse, Partial<UsersListFilters>>({
      query: (filters) => {
        return {
          url: ENDPOINTS.USERS,
          method: METHODS.POST,
          body: filters,
        };
      },
      providesTags: [TAGS.USERS_LIST],
    }),

    updateUser: builder.mutation<UserResponse, EditedUserData>({
      query: (editedUserData) => ({
        method: METHODS.PUT,
        url: ENDPOINTS.USER,
        body: editedUserData,
      }),
      invalidatesTags: [TAGS.USER_ME],
    }),

    toggleFollowUser: builder.mutation<FollowUserResponse, UserId>({
      query: (userId) => ({
        method: METHODS.PUT,
        url: `${ENDPOINTS.USER_FOLLOW}/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, queryFulfilled }) {
        const patchUserMe = dispatch(
          userApi.util.updateQueryData('userMe', undefined, (draft) => {
            const usersFollowedByMe = draft.data.following;
            const isFollowed = usersFollowedByMe.includes(userId);

            if (isFollowed) {
              // eslint-disable-next-line no-param-reassign
              draft.data.following = usersFollowedByMe.filter(
                (id) => id !== userId
              );
            } else {
              draft.data.following.push(userId);
            }
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchUserMe.undo();
        }
      },
    }),
  }),
});

export const {
  useUsersListQuery,
  useUserMeQuery,
  useUserByIdQuery,
  useToggleFollowUserMutation,
} = userApi;
