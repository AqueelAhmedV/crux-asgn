import Chart, { type Props } from "react-apexcharts";
import type { ChartProps } from "./chartsTypes";
export function LineChart<T extends 'line'>({ 
    showGrid=false, 
    showLegend=false, 
    showToolbar=false, 
    titleText="", 
    chartHeight='100%',
    chartWidth,
    // recordsCount,
    chartData
}: Partial<ChartProps<T>>) {
    const chartConfig: Props = {
        type: "line",
        height: chartHeight,
        width: chartWidth,
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
            colors: ["#00aa00", "#ee0000", "#0000dd"],
            stroke: {
                // lineCap: "",
                // curve: "smooth",
            },
            markers: {
                size: 0,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: showGrid,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
            legend: {
                show: showLegend
            }
        },
        
    };
    return (
        <Chart  {...chartConfig} />
    );
}