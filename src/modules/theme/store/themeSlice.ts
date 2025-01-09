import { createSlice } from '@reduxjs/toolkit';
import { THEME_STORAGE_KEY } from '@/modules/theme/constants/theme-storage-key';
import getStoredThemeMode from '@/modules/theme/helpers/getStoredThemeMode';
// import { AppThunk } from '@/redux/types';

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

// const THEME_STORAGE_KEY = 'themeMode';

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

// export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
//   dispatch(toggleMode());
//   const newMode = getState().theme.mode;
//   localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newMode));
// };

export const { selectThemeMode } = themeSlice.selectors;
export default themeSlice;
