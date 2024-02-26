import { Reducer, useReducer } from 'react';
import { TopbarVariant, WidgetConfig, WidgetDimension, WidgetType } from '../components/widget/widgetsTypes';
import { DataType } from '../db/dataType';
import { ChartProps, ChartType } from '../components/charts/chartsTypes';
import { WidgetTheme } from '../theme/widget';

// Define the action types
const SET_DIMENSION = 'SET_DIMENSION';
const SET_TYPE = 'SET_TYPE';
const SET_DATA_TYPE = 'SET_DATA_TYPE';
const SET_CHART_TYPE = 'SET_CHART_TYPE';
const SET_THEME = 'SET_THEME';
const SET_TOPBAR_VARIANT = 'SET_TOPBAR_VARIANT';
const SET_CHART_PROPS = 'SET_CHART_PROPS';

// Define the initial state
const defaultWidgetConfig: WidgetConfig = {
    widgetId: Date.now().toString(),
    theme: 'light',
    topbarVariant: 'dropdown',
    dataType: 'accounting',
    type: 'chart',
    chartType: 'line',
    chartProps: { recordsCount: 4, chartWidth: '100%' },
    dimension: 'smallSquare'
  }


type WidgetConfigAction = {
    type: typeof SET_DIMENSION 
        | typeof SET_TYPE 
        | typeof SET_CHART_TYPE 
        | typeof SET_CHART_PROPS 
        | typeof SET_DATA_TYPE 
        | typeof SET_THEME 
        | typeof SET_TOPBAR_VARIANT,
    payload: any//WidgetConfig[keyof WidgetConfig]
}

// Define the reducer function
const reducer: Reducer<WidgetConfig, WidgetConfigAction> = (state, action) => {
  switch (action.type) {
    case SET_DIMENSION:
      return { ...state, dimension: action.payload };
    case SET_TYPE:
      return { ...state, type: action.payload };
    case SET_DATA_TYPE:
      return { ...state, dataType: action.payload };
    case SET_CHART_TYPE:
      return { ...state, chartType: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_TOPBAR_VARIANT:
      return { ...state, topbarVariant: action.payload };
    case SET_CHART_PROPS:
      return { ...state, chartProps: action.payload };
    default:
      return state;
  }
};

// Custom hook
const useWidgetConfig = (initialStateOverride = defaultWidgetConfig) => {
  const [widgetConfig, dispatch] = useReducer(reducer, initialStateOverride);
    // Define action creators
  const setDimension = (dimension: WidgetDimension) => dispatch({ type: SET_DIMENSION, payload: dimension });
  const setWidgetType = (type: WidgetType ) => dispatch({ type: SET_TYPE, payload: type });
  const setDataType = (dataType: DataType) => dispatch({ type: SET_DATA_TYPE, payload: dataType });
  const setChartType = (chartType: ChartType) => dispatch({ type: SET_CHART_TYPE, payload: chartType });
  const setTheme = (theme: WidgetTheme) => dispatch({ type: SET_THEME, payload: theme });
  const setTopbarVariant = (topbarVariant: TopbarVariant) =>
    dispatch({ type: SET_TOPBAR_VARIANT, payload: topbarVariant });
  const setChartProps = (chartProps: Partial<ChartProps<ChartType>>) => dispatch({ type: SET_CHART_PROPS, payload: chartProps });

  return { widgetConfig, setDimension, setWidgetType, setDataType, setChartType, setTheme, setTopbarVariant, setChartProps };
};

export default useWidgetConfig;
