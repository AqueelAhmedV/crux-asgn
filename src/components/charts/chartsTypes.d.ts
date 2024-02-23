import { DataType } from "../../db/dataType";

type ChartType = 'pie' | 'bar' | 'line'
interface GenericChartProps {
    showLegend?: boolean,
    showToolbar?: boolean,
    titleText?: string,
    bgColor: string,
}

type PieChartData = Array<number>;

interface BarLineDataItem {
    name: string,
    data: Array<number>
}

type BarChartData = Array<BarLineDataItem>

type LineChartData = BarChartData

type ChartData<T extends ChartType> = T extends 'pie' ? PieChartData :
    T extends 'bar' ? BarChartData :
    T extends 'line' ? LineChartData :
    never;
interface BarChartProps extends GenericChartProps {
    showGrid?: boolean,
    chartHeight?: string | number,
    chartWidth?: string | number,
    recordsCount: number | undefined,
    barWidth: string,
    chartData: BarChartData
}

interface LineChartProps extends GenericChartProps {
    showGrid?: boolean,
    chartHeight?: string | number,
    chartWidth?: string | number,
    recordsCount: number | undefined,
    chartData: LineChartData
}

interface PieChartProps extends GenericChartProps {
    chartDiameter?: number | string,
    chartData: PieChartData
}

type ChartProps<T> = (T extends 'pie' ? PieChartProps :
T extends 'bar' ? BarChartProps: T extends 'line' ? LineChartProps: never);

interface ChartComponentProps<T, K extends DataType> {
    chartType: T,
    dataType: K,
    chartProps: Partial<ChartProps<T>>,
}