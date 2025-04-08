import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '@shared/webStorage';
import { TOKEN_STORAGE_KEY } from '@shared/api/config/token-storage-key';

export const setTokenToLocalStorage = setToLocalStorage(TOKEN_STORAGE_KEY);
export const removeTokenFromLocalStorage =
  removeFromLocalStorage(TOKEN_STORAGE_KEY);

export const getTokenFromLocalStorage = (): string | null => {
  const token = getFromLocalStorage(TOKEN_STORAGE_KEY);

  if (token && typeof token === 'string') return token;
  return null;
};
