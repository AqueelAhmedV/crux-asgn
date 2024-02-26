import { Chart } from "../charts/Chart";
import { ChartData, ChartProps, ChartType } from "../charts/chartsTypes";
import { Summary } from "../summary/Summary";
import type { WidgetContentProps, WidgetType } from "./widgetsTypes";
import { DataTable } from "../table/Table";

import { deserializer } from "../../utils/deserializers";
import React, { Suspense, useMemo } from "react";
import { getData, getSummary } from "../../api";
import { SummaryProps } from "../summary/summaryTypes";
import { Skeleton } from "@chakra-ui/react";
import { DataTableRows } from "../table/tableTypes";


export function WidgetContent<T extends WidgetType, K extends ChartType>({ type, chartType, dataType, chartProps }: WidgetContentProps<T, K>) {
    
    // memoize + delay/lazyload?
    
    const LzMzContent = useMemo(() => {
        return React.lazy(async () => {
            let summaryProps: SummaryProps, chartData: ChartData<K>, tableData: DataTableRows;
            const widgetLookup: Record<WidgetType, JSX.Element> = {
                summary: <></>,
                chart: <></>,
                table: <></>
            }
            if (type == 'summary') {
                summaryProps = await getSummary().then(
                    (summaryRes) => deserializer.summary(dataType, summaryRes))
                widgetLookup.summary = <Summary {...summaryProps}/>
            } else if (type === 'chart') {
                chartData = await getData().then(
                    (dataRes) => deserializer.chart(chartType as K, dataRes, dataType)) as ChartData<K>
                widgetLookup.chart = <Chart chartType={chartType as K} chartData={chartData} chartProps={chartProps as ChartProps<K>}/>
            } else {
                tableData = await getData().then(
                    (dataRes) => deserializer.table(dataType, dataRes))
                widgetLookup.table = <DataTable dataType={dataType} tableRows={tableData}/>
            }
            

            function FinalWidget() {
                return widgetLookup[type]
            }
            
            
            return ({
                default: FinalWidget
            })
        })
    }, [dataType, chartType, type, chartProps])
    

    return (
    <div className=' p-1 flex justify-center items-center' >
        <Suspense fallback={<Skeleton fitContent />}>
            <LzMzContent/>
        </Suspense>
    </div>)
}