import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const ToggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ isDarkTheme, ToggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
