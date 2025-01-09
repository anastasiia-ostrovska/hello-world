import { createSlice, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

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
});

const { toggleMode } = themeSlice.actions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newMode));
};

export const { selectThemeMode } = themeSlice.selectors;
export default themeSlice;
