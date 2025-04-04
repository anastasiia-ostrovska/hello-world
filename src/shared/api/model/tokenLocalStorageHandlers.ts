import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '@shared/webStorage';
import { TOKEN_STORAGE_KEY } from '@shared/api/config/token-storage-key';

export const setTokenToLocalStorage = setToLocalStorage(TOKEN_STORAGE_KEY);
export const getTokenFromLocalStorage = getFromLocalStorage(TOKEN_STORAGE_KEY);
export const removeTokenFromLocalStorage =
  removeFromLocalStorage(TOKEN_STORAGE_KEY);
