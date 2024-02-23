import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import type { WidgetDimension, WidgetType } from '../../components/widget/widgetsTypes';
import type { DataType } from '../../db/dataType';
import type { ChartType } from '../../components/charts/chartsTypes';
import { WidgetTheme } from '../../theme/widget';


// Define the widget configuration interface
interface WidgetConfig {
  dimension: WidgetDimension,
  type: WidgetType;
  dataType: DataType;
  chartType?: ChartType; // Only applicable if the widget type is 'chart'
  theme: WidgetTheme;
  widgetId: string
}

// Define the context type
interface DashboardContextType {
  widgetsConfig: {
    [widgetId: string]: WidgetConfig;
  };
  addWidget: (widgetId: string, config: WidgetConfig) => void;
  removeWidget: (widgetId: string) => void;
}

// Create the context
const DashboardContext = createContext<DashboardContextType>({
  widgetsConfig: {},
  addWidget: () => {},
  removeWidget: () => {},
});

// Create the provider
export const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [widgetsConfig, setWidgetsConfig] = useState<DashboardContextType['widgetsConfig']>({});

  const addWidget = (widgetId: string, config: WidgetConfig) => {
    setWidgetsConfig((prevConfig) => ({
      ...prevConfig,
      [widgetId]: config,
    }));
  };

  const removeWidget = (widgetId: string) => {
    setWidgetsConfig((prevConfig) => {
      const newConfig = { ...prevConfig };
      delete newConfig[widgetId];
      return newConfig;
    });
  };

  return (
    <DashboardContext.Provider value={{ widgetsConfig, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the dashboard context
export const useDashboard = () => useContext(DashboardContext);
