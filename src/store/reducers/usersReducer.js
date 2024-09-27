import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersCount: 8,
  currentPage: 1,
};

const usersReducer = createSlice({
  name: 'users',
  initialState,
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
});

export const selectCurrentPage = (state) => state.users.currentPage;
export const selectUsersCountOnPage = (state) => state.users.usersCount;

export const { setCurrentPage, setFollowStatus } = usersReducer.actions;

export default usersReducer.reducer;
