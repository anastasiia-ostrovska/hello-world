const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
  users: [],
  usersCount: 8,
  currentPage: 1,
  totalCount: 50,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.id
            ? { ...user, followed: !user.followed }
            : user;
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

    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });

export const toggleFollow = (id) => ({ type: TOGGLE_FOLLOW, id });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export default usersReducer;
