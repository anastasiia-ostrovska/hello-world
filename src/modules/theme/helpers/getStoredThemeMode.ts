import { ThemeMode } from '@/modules/theme/types';

const getStoredThemeMode = (key: string): ThemeMode | null => {
  const storedMode: string | null = localStorage.getItem(key);

  if (storedMode) {
    const parsedMode: unknown = JSON.parse(storedMode);

    if (Object.values(ThemeMode).includes(parsedMode as ThemeMode)) {
      return parsedMode as ThemeMode;
    }
  }

  return null;
};

export default getStoredThemeMode;
