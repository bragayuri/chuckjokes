const safeLocalStorage = {
  getItem: (key: string) => process.browser && localStorage.getItem(key),
  setItem: (key: string, value: string) => process.browser && localStorage.setItem(key, value),
  removeItem: (key: string) => process.browser && localStorage.removeItem(key),
  clear: () => process.browser && localStorage.clear(),
};

export default safeLocalStorage;
