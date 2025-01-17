import { ThemeMode } from '@/modules/theme/types';

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

export default getStoredThemeMode;
