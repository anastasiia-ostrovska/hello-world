import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersQueryCount: 12,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: 'usersQueryParameters',
  initialState,
  selectors: {
    selectUsersQueryCount: (state) => state.usersQueryCount,
    selectCurrentPage: (state) => state.currentPage,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { selectUsersQueryCount, selectCurrentPage } =
  usersSlice.selectors;
export const { setCurrentPage } = usersSlice.actions;
export default usersSlice;
