import { useState } from "react";

const useLocalStorage = <T>(key: string, initial: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const checkLocalStorage = localStorage.getItem(key);
      return checkLocalStorage ? JSON.parse(checkLocalStorage) : initial;
    } catch (err) {
      console.log(err);
    }
  });
  const setLocalStorage = (value: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setLocalStorage];
};

export default useLocalStorage;
