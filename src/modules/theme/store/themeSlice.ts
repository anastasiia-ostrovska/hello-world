import { createSlice } from '@reduxjs/toolkit';
import { THEME_STORAGE_KEY } from '@/modules/theme/constants';
import { ThemeMode } from '@/modules/theme/types';
import getStoredThemeMode from '@/modules/theme/helpers/getStoredThemeMode';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: getStoredThemeMode(THEME_STORAGE_KEY),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectThemeMode: (state) => state.mode,
  },
  reducers: {
    toggleMode: (state) => {
      state.mode =
        state.mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export const { selectThemeMode } = themeSlice.selectors;
export default themeSlice;
