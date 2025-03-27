import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '@shared/webStorage';
import { TOKEN_STORAGE_KEY } from '@shared/api/config/token-storage-key';

export const setStoredToken = setToLocalStorage(TOKEN_STORAGE_KEY);
export const getStoredToken = getFromLocalStorage(TOKEN_STORAGE_KEY);
export const removeStoredToken = removeFromLocalStorage(TOKEN_STORAGE_KEY);
