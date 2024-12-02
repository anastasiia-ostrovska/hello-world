import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/app/store/rootReducer';

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

export const { setActiveItem } = navigationSlice.actions;
export const { selectActiveItem } = navigationSlice.selectors;
