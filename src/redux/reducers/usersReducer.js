import * as api from '@/services/api/api-requests';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  usersCount: 8,
  currentPage: 1,
  totalCount: null,
  isLoading: false,
  followingInProgressUsers: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.id ? { ...user, followed: true } : user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.id ? { ...user, followed: false } : user;
        }),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgressUsers: action.isFetching
          ? [...state.followingInProgressUsers, action.userId]
          : state.followingInProgressUsers.filter(
              (userId) => userId !== action.userId
            ),
      };

    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });

export const followSuccess = (id) => ({ type: FOLLOW, id });

export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export const toggleFollowingInProgressUsers = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const setUsersData = (usersCount, currentPage) => async (dispatch) => {
  const params = `?count=${usersCount}&page=${currentPage}`;

  dispatch(setIsLoading(true));
  dispatch(setCurrentPage(currentPage)); // ?

  const data = await api.getUsers(params);

  dispatch(setIsLoading(false));
  dispatch(setUsers(data.items));

  // temporarily decreased amount:
  dispatch(setTotalUsersCount(data.totalCount - 26600));
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingInProgressUsers(true, userId));
  const data = await api.postFollowState(userId);

  if (data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingInProgressUsers(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingInProgressUsers(true, userId));
  const data = await api.deleteFollowState(userId);

  if (data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(toggleFollowingInProgressUsers(false, userId));
};

export default usersReducer;
