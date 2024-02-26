import { useMemo} from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import type { 
    ChartComponentProps, 
    ChartType, PieChartProps, 
    PieChartData, BarChartData, 
    LineChartData, ChartProps 
} from "./chartsTypes";




export function Chart<T extends ChartType>({ chartType,  chartData, chartProps }: ChartComponentProps<T>) {

    const ChartMz = useMemo(() => {
        const chartLookup = {
            pie: <PieChart 
                chartData={chartData as PieChartData} 
                chartDiameter={(chartProps as PieChartProps).chartDiameter}
                />,
            bar: <BarChart 
                chartData={chartData as BarChartData}
                barWidth={(chartProps as Partial<ChartProps<'bar'>>).barWidth}
                recordsCount={(chartProps as Partial<ChartProps<'bar'>>).recordsCount}
                />,
            line: <LineChart 
                chartData={chartData as LineChartData}
                chartWidth={(chartProps as Partial<ChartProps<'line'>>).chartWidth}
                recordsCount={(chartProps as Partial<ChartProps<'line'>>).recordsCount}
            />
        }
        return chartLookup[chartType]
    }, [chartData, chartProps, chartType]) 
    return <>{ChartMz}</>
}