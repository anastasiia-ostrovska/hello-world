import { AppThunk } from '@/store';
import { setStoredThemeMode } from '@/shared/theme';
import { toggleMode } from '@/modules/theme/store/themeSlice';

const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setStoredThemeMode(newMode);
};
export default toggleThemeMode;
