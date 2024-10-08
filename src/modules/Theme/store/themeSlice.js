import { createSlice } from '@reduxjs/toolkit';

export const modeType = {
  dark: 'dark',
  light: 'light',
};

const initialState = {
  mode: modeType.dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectMode: (state) => state.mode,
    selectModeToSwitch: (state) => {
      return state.mode === modeType.dark ? modeType.light : modeType.dark;
    },
  },
  reducers: {
    switchMode: (state) => {
      state.mode =
        state.mode === modeType.dark ? modeType.light : modeType.dark;
    },
  },
});

export const { selectMode } = themeSlice.selectors;

export default themeSlice.reducer;
