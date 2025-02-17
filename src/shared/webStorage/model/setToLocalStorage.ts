const setToLocalStorage =
  (key: string) =>
  (value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

export default setToLocalStorage;
