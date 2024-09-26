import { createSlice } from '@reduxjs/toolkit';
import * as api from '@api/api-requests';

const initialState = {
  users: [],
  usersCount: 8,
  currentPage: 1,
  totalCount: null,
  status: 'idle',
};

const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    toggleFollowUsers: (state, action) => {
      const { userId, isFollow } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      user.followed = isFollow;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setUsersStatus: (state, action) => {
      state.status = action.payload;
    },
    setFollowStatus: (state, action) => {
      const { userId, status } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      user.status = status;
    },
  },
});

export const selectUsers = (state) => state.users.users;
export const selectCurrentPage = (state) => state.users.currentPage;
export const selectUsersCountOnPage = (state) => state.users.usersCount;
export const selectTotalUsersCount = (state) => state.users.totalCount;
export const selectStatus = (state) => state.users.status;

export const {
  setUsers,
  toggleFollowUsers,
  setCurrentPage,
  setTotalUsersCount,
  setUsersStatus,
  setFollowStatus,
} = usersReducer.actions;

export const setUsersData = (usersCount, currentPage) => async (dispatch) => {
  const queryParams = `?count=${usersCount}&page=${currentPage}`;

  dispatch(setUsersStatus('loading'));
  dispatch(setCurrentPage(currentPage));

  try {
    const data = await api.getUsers(queryParams);
    const { items, totalCount } = data;

    const users = items.map((item) => ({ ...item, status: 'idle' }));

    dispatch(setUsersStatus('idle'));
    dispatch(setUsers(users));

    // temporarily decreased amount:
    dispatch(setTotalUsersCount(totalCount - 26600));
  } catch (error) {
    dispatch(setUsersStatus('error'));
  }
};

export const follow = (userId) => async (dispatch) => {
  dispatch(setFollowStatus({ userId, status: 'loading' }));

  try {
    const data = await api.postFollowState(userId);
    dispatch(setFollowStatus({ userId, status: 'idle' }));
    if (data.resultCode === 0) {
      dispatch(toggleFollowUsers({ userId, isFollow: true }));
    }
  } catch (error) {
    dispatch(setFollowStatus({ userId, status: 'error' }));
  }
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(setFollowStatus({ userId, status: 'loading' }));

  try {
    const data = await api.deleteFollowState(userId);
    dispatch(setFollowStatus({ userId, status: 'idle' }));

    if (data.resultCode === 0) {
      dispatch(toggleFollowUsers({ userId, isFollow: false }));
    }
  } catch (error) {
    dispatch(setFollowStatus({ userId, status: 'error' }));
  }
};

export default usersReducer.reducer;
