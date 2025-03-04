export const getFromLocalStorage = (key: string) => (): string | null => {
  return localStorage.getItem(key);
};

export const setToLocalStorage =
  (key: string) =>
  (value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

export const removeFromLocalStorage = (key: string) => (): void => {
  localStorage.removeItem(key);
};
