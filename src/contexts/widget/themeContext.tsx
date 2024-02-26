import React, { type PropsWithChildren, createContext, useContext, useState } from 'react';


import { WidgetTheme, WidgetThemeConfig, widgetTheme } from '../../theme/widget';
import { WidgetConfig } from '../../components/widget/widgetsTypes';
import { defaultWidgetConfig } from '../../utils/reducers';
// Define the context
type ThemeContextType = {
  currentTheme: WidgetTheme;
  setWidgetTheme: (theme: WidgetTheme) => void;
  widgetTheme: WidgetThemeConfig;
  setWidgetConfig: (cfg: WidgetConfig) => void;
  widgetConfig: WidgetConfig
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  setWidgetTheme: () => {},
  widgetTheme: widgetTheme['light'],
  widgetConfig: defaultWidgetConfig,
  setWidgetConfig: () => {}
});

// Define the provider
export const WidgetThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<WidgetTheme>('light');

  const [ widgetConfig, setWidgetConfig] = useState<WidgetConfig>(defaultWidgetConfig)

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
        widgetConfig,
        setWidgetConfig
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


export const useWidgetContext = () => useContext(ThemeContext);
