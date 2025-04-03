import { getFromLocalStorage, setToLocalStorage } from '@shared/webStorage';
import { ThemeMode } from './types';
import { MODE_STORAGE_KEY } from '../consts/mode-storage-key';

export const setStoredThemeMode = setToLocalStorage(MODE_STORAGE_KEY);

const getStoredMode = getFromLocalStorage(MODE_STORAGE_KEY);

export const getStoredThemeMode = (): ThemeMode | null => {
  const storedMode = getStoredMode();

  if (storedMode) {
    const parsedMode = JSON.parse(storedMode);

    if (Object.values(ThemeMode).includes(parsedMode)) {
      return parsedMode;
    }
  }

  return null;
};
