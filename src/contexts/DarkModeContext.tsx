import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage/useLocalStorage";

interface DarkModeContextProviderProps {
  children?: React.ReactNode;
}

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},
});

export const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [localStorageDarkMode, setLocalStorageDarkMode] = useLocalStorage(
    "isDarkMode",
    isDarkMode
  );

  const toggleIsDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleIsDarkMode,
  };
  useEffect(() => {
    setIsDarkMode(localStorageDarkMode);
  }, []);
  useEffect(() => {
    setLocalStorageDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
