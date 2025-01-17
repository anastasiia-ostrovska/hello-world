import { AppThunk } from '@/redux';
import { THEME_STORAGE_KEY } from '@/modules/theme/constants';
import { toggleMode } from '@/modules/theme/store/themeSlice';
import setStoredThemeMode from '@/modules/theme/helpers/setStoredThemeMode';

const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setStoredThemeMode(THEME_STORAGE_KEY, newMode);
};
export default toggleThemeMode;
