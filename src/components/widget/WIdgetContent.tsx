import { Chart } from "../charts/Chart";
import { ChartType } from "../charts/chartsTypes";
import { Summary } from "../summary/Summary";
import type { WidgetContentProps, WidgetType } from "./widgetsTypes";


import { summary } from "../../db/data";
import { DataTable } from "../table/Table";

export function WidgetContent<T extends WidgetType, K extends ChartType>({ type, chartType, dataType, chartProps }: WidgetContentProps<T, K>) {
    const widgetLookup = {
        chart: <Chart chartType={chartType} dataType={dataType} chartProps={chartProps} />,
        table: <DataTable />,
        summary: <Summary text={summary.text} highlights={summary.hightlights as Array<[number, number]>} />,
    }

    return widgetLookup[type]
}