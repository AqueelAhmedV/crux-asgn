import { useEffect, useMemo, useState } from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import type { ChartData, ChartComponentProps, ChartType, PieChartProps, PieChartData, BarChartData, LineChartData, ChartProps } from "./chartsTypes";
import { DataType } from "../../db/dataType";
import { getData } from "../../api";
import { chartDeserializer } from "../../utils/deserializers";
import { useWidgetTheme } from "../../contexts/widget/themeContext";
import { Skeleton } from "@chakra-ui/react";



export function Chart<T extends ChartType, K extends DataType>({ chartType, dataType, chartProps }: ChartComponentProps<T, K>) {

    const [chartData, setChartData] = useState<ChartData<T>>()
    const [loading, setLoading] = useState(false)
    const { widgetTheme } = useWidgetTheme()

    useEffect(() => {
        getData(setLoading)
        .then((data) => chartDeserializer(chartType, data, dataType, ['accounting', 'marketing', 'sales']))
        .then(setChartData)
        .catch(console.log)
    }, [dataType])

    const ChartMz = useMemo(() => {
        const chartLookup = {
            pie: <PieChart 
                chartData={chartData as PieChartData} 
                chartDiameter={(chartProps as PieChartProps).chartDiameter}
                bgColor={widgetTheme.content.bg}
                />,
            bar: <BarChart 
                chartData={chartData as BarChartData}
                barWidth={(chartProps as Partial<ChartProps<'bar'>>).barWidth}
                recordsCount={(chartProps as Partial<ChartProps<'bar'>>).recordsCount}
                bgColor={widgetTheme.content.bg}
                />,
            line: <LineChart 
                chartData={chartData as LineChartData}
                chartWidth={(chartProps as Partial<ChartProps<'line'>>).chartWidth}
                recordsCount={(chartProps as Partial<ChartProps<'line'>>).recordsCount}
                bgColor={widgetTheme.content.bg}
            />
        }
        return chartLookup[chartType]
    }, [chartData, chartProps, chartType]) 
    return loading ? <Skeleton width={'100%'} height={'100%'} color={'gray'}/>: <>{ChartMz}</>
}