import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersQueryParams } from './types';

const initialState: UsersQueryParams = {
  usersQueryCount: 12,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: 'usersQueryParams',
  initialState,
  selectors: {
    selectUsersQueryCount: (state) => state.usersQueryCount,
    selectCurrentPage: (state) => state.currentPage,
  },
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { selectUsersQueryCount, selectCurrentPage } =
  usersSlice.selectors;
export const { setCurrentPage } = usersSlice.actions;
export default usersSlice;
