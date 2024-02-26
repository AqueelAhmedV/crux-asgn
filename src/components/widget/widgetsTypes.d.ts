import { type PropsWithChildren, type SetStateAction } from "react";
import { ChartProps, ChartType } from "../charts/chartsTypes";
import { DataType } from "../../db/dataType";
import { WidgetTheme } from "../../theme/widget";

type TopbarVariant = 'dropdown' | 'tabs'

type DaysOptions = 1 | 7 | 14 | 30

type WidgetType = "chart" | "table" | "summary"

type WidgetDimension = 'smallSquare' | 'horizontal' | 'vertical' | 'bigSquare'

interface WidgetConfig {
    dimension: WidgetDimension,
    type: WidgetType;
    dataType: DataType;
    chartType?: ChartType; // Only applicable if the widget type is 'chart'
    theme: WidgetTheme;
    widgetId: string,
    topbarVariant: TopbarVariant,
    chartProps?: Partial<ChartProps<T>>
  }

type WidgetBaseProps = {
    widgetConfig: WidgetConfig
}

type WidgetContainerProps = PropsWithChildren & {
    dimension: WidgetDimension,
    widgetConfig: WidgetConfig
} 

interface WidgetTopbarProps {
    activeTab: DaysOptions,
    setActiveTab: React.Dispatch<SetStateAction<DaysOptions>>,
    variant: TopbarVariant
}

interface WidgetTopbarDataItem {
    label: string,
    value: DaysOptions
}

type WidgetTopbarData = WidgetTopbarDataItem[]

interface GenericWidgetContentProps {
    type: WidgetType,
    dataType: DataType,
}

type WidgetContentProps<T extends WidgetType, K extends ChartType> = GenericWidgetContentProps &  {
    chartProps?: Partial<ChartProps<K>>,
    chartType?: K,
} & {
    summaryProps?: Record<string, string>
}

