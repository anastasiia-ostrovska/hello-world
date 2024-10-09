import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/shared/store/rootReducer';

const initialState = {
  usersCount: 8,
  currentPage: 1,
};

const usersReducer = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectCurrentPage: (state) => state.currentPage,
    selectUsersCountOnPage: (state) => state.usersCount,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFollowStatus: (state, action) => {
      const { userId, status } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      user.status = status;
    },
  },
}).injectInto(rootReducer);

export const { selectCurrentPage, selectUsersCountOnPage } =
  usersReducer.selectors;
export const { setCurrentPage, setFollowStatus } = usersReducer.actions;
