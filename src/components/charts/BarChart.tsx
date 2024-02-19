import Chart, { Props } from 'react-apexcharts'
  
    
  export function BarChart({ 
    showLegend=false, 
    showToolbar=false, 
    showGrid=false, 
    titleText="", 
    chartHeight='100%',
    recordsCount,
    barWidth
 }: BarChartProps) {
    const chartConfig: Props = {
        type: "bar",
        height: chartHeight,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500].slice(0, recordsCount ?? 9),
            },
            {
                name: "Marketing",
                data: [500, 210, 100, 620, 200, 350, 500, 430, 200].slice(0, recordsCount ?? 9),
            },
            {
                name: "Accounting",
                data: [10, 100, 200, 420, 500, 150, 500, 330, 400].slice(0, recordsCount ?? 9),
            },
        ],
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