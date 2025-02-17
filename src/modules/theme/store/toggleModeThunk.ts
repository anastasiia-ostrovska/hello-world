import { AppThunk } from '@/store';
import { MODE_STORAGE_KEY } from '@/shared/theme';
import { toggleMode } from '@/modules/theme/store/themeSlice';
import setStoredThemeMode from '@/modules/theme/helpers/setStoredThemeMode';

const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setStoredThemeMode(MODE_STORAGE_KEY, newMode);
};
export default toggleThemeMode;
