
import Chart, { Props } from "react-apexcharts";
import { ChartProps } from "./chartsTypes";


export function PieChart<T extends 'pie'>({ showLegend, showToolbar, titleText, chartDiameter=240, chartData }: Partial<ChartProps<T>>) {
    const chartConfig: Props = {
        type: "pie",
        width: chartDiameter,
        height: chartDiameter,
        series: chartData,
        options: {
            chart: {
                toolbar: {
                    show: showToolbar,
                },
            },
            title: {
                text: titleText,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#00ee00", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
            legend: {
                show: showLegend,
            },
        },
    };

    return (
        <Chart {...chartConfig} />
    );
}