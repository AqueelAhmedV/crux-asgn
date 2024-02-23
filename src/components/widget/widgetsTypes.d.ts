import { type PropsWithChildren, type SetStateAction } from "react";
import { ChartProps, ChartType } from "../charts/chartsTypes";
import { DataType } from "../../db/dataType";

type TopbarVariant = 'dropdown' | 'tabs'

type DaysOptions = 1 | 7 | 14 | 30

type WidgetType = "chart" | "table" | "summary"

type WidgetDimension = 'smallSquare' | 'horizontal' | 'vertical' | 'bigSquare'

interface WidgetBaseProps extends PropsWithChildren {
    dimension: WidgetDimension,
    topbarVariant: TopbarVariant
}

interface WidgetTopbarProps {
    variant: TopbarVariant,
    activeTab: DaysOptions,
    setActiveTab: React.Dispatch<SetStateAction<DaysOptions>>
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

type WidgetContentProps<T extends WidgetType, K extends ChartType> = GenericWidgetContentProps & (T extends 'chart'?  {
    chartProps: Partial<ChartProps<K>>,
    chartType: K,
}: T extends 'summary'? {
    summaryProps?: Record<string, string>
}: never);