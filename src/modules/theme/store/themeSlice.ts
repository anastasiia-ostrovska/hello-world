import { createSlice } from '@reduxjs/toolkit';
import { ThemeMode } from '@/shared/theme';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: ThemeMode.Dark,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectThemeMode: (state) => state.mode,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode =
        state.mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    },
  },
});

export const { setMode, toggleMode } = themeSlice.actions;
export const { selectThemeMode } = themeSlice.selectors;
export default themeSlice;
