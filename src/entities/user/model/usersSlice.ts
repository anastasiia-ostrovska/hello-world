import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersQueryParams } from './types';

const initialState: UsersQueryParams = {
  usersPerPage: 12,
  currentPage: 1,
  searchedUser: '',
  isFollowedByMe: false,
};

export const usersSlice = createSlice({
  name: 'usersQueryParams',
  initialState,
  selectors: {
    selectUsersQueryParams: (state) => state,
    selectUsersPerPage: (state) => state.usersPerPage,
    selectCurrentPage: (state) => state.currentPage,
  },
  reducers: {
    setUsersPerPage: (state, action: PayloadAction<number>) => {
      state.usersPerPage = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchedUser: (state, action: PayloadAction<string>) => {
      state.searchedUser = action.payload;
    },
    setIsFollowedByMe: (state, action: PayloadAction<boolean>) => {
      state.isFollowedByMe = action.payload;
    },
  },
});

export const { selectUsersPerPage, selectCurrentPage } = usersSlice.selectors;
export const {
  setUsersPerPage,
  setCurrentPage,
  setSearchedUser,
  setIsFollowedByMe,
} = usersSlice.actions;
