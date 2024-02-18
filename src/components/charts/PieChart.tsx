
import Chart, { Props } from "react-apexcharts";


export function PieChart({ showLegend, showToolbar, titleText, chartDiameter=240 }: PieChartProps) {
    const chartConfig: Props = {
        type: "pie",
        width: chartDiameter,
        height: chartDiameter,
        series: [44, 55, 13, 43, 22],
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