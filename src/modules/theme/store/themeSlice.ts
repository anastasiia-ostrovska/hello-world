import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '@/redux/store';
import rootReducer from '@/redux/root-reducer';

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

const THEME_STORAGE_KEY = 'themeMode';

const getStoredThemeMode = (key: string): ThemeMode => {
  const storedMode: string | null = localStorage.getItem(key);

  if (storedMode) {
    const parsedMode: unknown = JSON.parse(storedMode);

    if (Object.values(ThemeMode).includes(parsedMode as ThemeMode)) {
      return parsedMode as ThemeMode;
    }
  }

  return ThemeMode.Dark;
};

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
}).injectInto(rootReducer);

const { toggleMode } = themeSlice.actions;

export const toggleThemeMode =
  () => (dispatch: AppDispatch, getState: () => ThemeState) => {
    dispatch(toggleMode());
    const newMode = getState().mode;
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newMode));
  };

export const { selectThemeMode } = themeSlice.selectors;
