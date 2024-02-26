import React, { type PropsWithChildren, createContext, useContext, useState } from 'react';
import { WidgetConfig } from '../../components/widget/widgetsTypes';
import { tryViewTransition } from '../../utils/dom';



// Define the context type
interface DashboardContextType {
  widgetsConfig: Record<WidgetConfig['widgetId'], WidgetConfig>
  addWidget: (widgetId: string, config: WidgetConfig) => void;
  removeWidget: (widgetId: string) => void;
}


const startupWidgets: Record<WidgetConfig['widgetId'], WidgetConfig> = {
  '1234': {
    widgetId: '1234',
    type: 'table',
    theme: 'inverted',
    dimension: 'smallSquare',
    topbarVariant: 'dropdown',
    dataType: 'accounting'
  },
  '1358': {
    widgetId: '1358',
    type: 'chart',
    theme: 'light',
    dimension: 'bigSquare',
    topbarVariant: 'tabs',
    dataType: 'accounting',
    chartType: 'bar',
    chartProps: {
      barWidth: '60%',
      chartHeight: '100%',
      recordsCount: 2
    }
  },
  '2468': {
    widgetId: '2468',
    type: 'summary',
    theme: 'light',
    dimension: 'horizontal',
    topbarVariant: 'dropdown',
    dataType: 'accounting',
  },
  '9876': {
    widgetId: '9876',
    type: 'chart',
    theme: 'dark',
    dimension: 'vertical',
    topbarVariant: 'tabs',
    dataType: 'accounting',
    chartType: 'pie',
    chartProps: {
      chartDiameter: '100%'
    }
  },
  '0987': {
    widgetId: '0987',
    type: 'summary',
    theme: 'inverted',
    dimension: 'horizontal',
    topbarVariant: 'dropdown',
    dataType: 'accounting',
  },
  '1100': {
    widgetId: '1100',
    type: 'chart',
    theme: 'inverted',
    dimension: 'bigSquare',
    topbarVariant: 'tabs',
    dataType: 'sales',
    chartType: 'line',
    chartProps: {
      chartWidth: '100%',
      recordsCount: 4
    }
  },
  '2200': {
    widgetId: '2200',
    type: 'chart',
    theme: 'light',
    dimension: 'smallSquare',
    topbarVariant: 'tabs',
    dataType: 'marketing',
    chartType: 'line',
    chartProps: {
      chartWidth: '100%',
      recordsCount: 4
    }
  }
}

// Create the context
const DashboardContext = createContext<DashboardContextType>({
  widgetsConfig: startupWidgets,
  addWidget: () => { },
  removeWidget: () => { },
});

// Create the provider
export const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [widgetsConfig, setWidgetsConfig] = useState<DashboardContextType['widgetsConfig']>(startupWidgets);

  const addWidget = (widgetId: string, config: WidgetConfig) => {
    tryViewTransition(setWidgetsConfig, (prevConfig) => ({
      ...prevConfig,
      [widgetId]: config,
    }))
  };

  const removeWidget = (widgetId: string) => {
    tryViewTransition(setWidgetsConfig, (prevConfig) => {
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
