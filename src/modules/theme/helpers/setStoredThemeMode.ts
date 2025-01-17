import { ThemeMode } from '@/modules/theme/types';

const setStoredThemeMode = (key: string, mode: ThemeMode): void => {
  localStorage.setItem(key, JSON.stringify(mode));
};

export default setStoredThemeMode;
