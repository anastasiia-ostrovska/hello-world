import { AppThunk } from '@/app/store/model/types';
import { setStoredThemeMode } from '@/shared/theme';
import { themeSlice } from './themeSlice';

const { toggleMode } = themeSlice.actions;

export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setStoredThemeMode(newMode);
};
