import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';
import { createSelector } from 'reselect';

const initialState = {
  activeItem: { id: '', path: '' },
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  selectors: {
    selectActiveItem: createSelector(
      (state) => state.activeItem,
      (activeItem) => activeItem
    ),
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
}).injectInto(rootReducer);

export const { setActiveItem } = navigationSlice.actions;
export const { selectActiveItem } = navigationSlice.selectors;
