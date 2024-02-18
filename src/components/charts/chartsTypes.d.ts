// import { ApexOptions } from "apexcharts";

interface ChartProps {
    showLegend?: boolean,
    showToolbar?: boolean,
    titleText?: string,
}

interface BarChartProps extends ChartProps {
    showGrid?: boolean,
    chartHeight?: string | number,
    chartWidth?: string | number,
    recordsCount: number | undefined,
    barWidth: string
}

interface LineChartProps extends ChartProps {
    showGrid?: boolean,
    chartHeight?: string | number,
    chartWidth?: string | number,
    recordsCount: number | undefined 
}

interface PieChartProps extends ChartProps {
    chartDiameter?: number | string
}

