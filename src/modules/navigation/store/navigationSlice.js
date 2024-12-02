import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/app/store/rootReducer';
import { createSelector } from 'reselect';

const initialState = {
  activeItem: { id: '', path: '' },
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  selectors: {
    selectActiveItem: (state) => state.activeItem,
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
}).injectInto(rootReducer);

const selectNavigationState = (state) => state.navigation;

export const selectActiveItem = createSelector(
  [selectNavigationState],
  (navigation) => navigation.activeItem
);

export const { setActiveItem } = navigationSlice.actions;
// export const { selectActiveItem } = navigationSlice.selectors;
