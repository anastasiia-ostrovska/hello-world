import { createSlice } from '@reduxjs/toolkit';

const mode = {
  dark: 'dark',
  light: 'light',
};

const initialState = {
  mode: mode.dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectMode: (state) => state.mode,
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === mode.dark ? mode.light : mode.dark;
    },
  },
});

export const { selectMode } = themeSlice.selectors;

export default themeSlice.reducer;
