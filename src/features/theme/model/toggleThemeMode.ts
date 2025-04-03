import type { AppThunk } from '@app/store';
import { setStoredThemeMode } from '@entities/theme';
import { themeSlice } from './themeSlice';

const { toggleMode } = themeSlice.actions;

export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setStoredThemeMode(newMode);
};
