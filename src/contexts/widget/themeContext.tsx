import React, { type PropsWithChildren, createContext, useContext, useState } from 'react';


import { WidgetTheme, WidgetThemeConfig, widgetTheme } from '../../theme/widget';
// Define the context
type ThemeContextType = {
  currentTheme: WidgetTheme;
  setWidgetTheme: (theme: WidgetTheme) => void;
  widgetTheme: WidgetThemeConfig;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  setWidgetTheme: () => {},
  widgetTheme: widgetTheme['light'],
});

// Define the provider
export const WidgetThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<WidgetTheme>('light');

  const setWidgetTheme = (theme: WidgetTheme) => {
    if (theme in widgetTheme) {
      setCurrentTheme(theme);
    } else {
      console.error(`Theme '${theme}' not found.`);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setWidgetTheme,
        widgetTheme: widgetTheme[currentTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useWidgetTheme = () => useContext(ThemeContext);
