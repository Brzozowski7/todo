import { useState } from "react";

const useLocalStorage = (key: string, initial: boolean | string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const checkLocalStorage = localStorage.getItem(key);
      return checkLocalStorage ? JSON.parse(checkLocalStorage) : initial;
    } catch (err) {
      console.log(err);
    }
  });
  const setLocalStorage = (value: string | ((val: string) => string)) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(newValue);
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setLocalStorage];
};

export default useLocalStorage;
