import Chart, { Props } from 'react-apexcharts'
import { ChartProps } from './chartsTypes';
  
    
  export function BarChart<T extends 'bar'>({ 
    showLegend=false, 
    showToolbar=false, 
    showGrid=false, 
    titleText="", 
    chartHeight='100%',
    // recordsCount,
    barWidth,
    chartData
 }: Partial<ChartProps<T>>) {
    const chartConfig: Props = {
        type: "bar",
        height: chartHeight,
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
          plotOptions: {
            bar: {
              columnWidth: barWidth,
              borderRadius: 2,
            },
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
              "Jun"
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
            show: showLegend,
          }
        },
      };
    return (
        <Chart {...chartConfig} />
    );
  }