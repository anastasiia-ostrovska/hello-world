import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/store/root-reducer';

const initialState = {
  usersQueryCount: 12,
  currentPage: 1,
};

const usersReducer = createSlice({
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
}).injectInto(rootReducer);

export const { selectUsersQueryCount, selectCurrentPage } =
  usersReducer.selectors;
export const { setCurrentPage } = usersReducer.actions;
