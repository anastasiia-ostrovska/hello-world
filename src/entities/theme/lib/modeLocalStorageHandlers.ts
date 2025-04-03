import { getFromLocalStorage, setToLocalStorage } from '@shared/webStorage';
import { ThemeMode } from '../model/types';
import { MODE_STORAGE_KEY } from '../consts/mode-storage-key';

export const setModeToLocalStorage = setToLocalStorage(MODE_STORAGE_KEY);

const getModeFromLocalStorage = getFromLocalStorage(MODE_STORAGE_KEY);

export const getStoredThemeMode = (): ThemeMode | null => {
  const modeInLocalStorage = getModeFromLocalStorage();

  if (modeInLocalStorage) {
    const parsedMode = JSON.parse(modeInLocalStorage);

    if (Object.values(ThemeMode).includes(parsedMode)) {
      return parsedMode;
    }
  }

  return null;
};
