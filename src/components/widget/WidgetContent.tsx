import { Chart } from "../charts/Chart";
import type { ChartData, ChartProps, ChartType } from "../charts/chartsTypes";
import { Summary } from "../summary/Summary";
import type { WidgetContentProps, WidgetType } from "./widgetsTypes";
import { DataTable } from "../table/Table";

import { deserializer } from "../../utils/deserializers";
import React, { Suspense, useMemo } from "react";
import { getData, getSummary } from "../../api";
import { SummaryProps } from "../summary/summaryTypes";
import { Skeleton } from "@chakra-ui/react";
import { DataTableRows } from "../table/tableTypes";
import { useWidgetContext } from "../../contexts/widget/themeContext";
import { Stats } from "../stats/Stats";


export function WidgetContent<T extends WidgetType, K extends ChartType>({ type, chartType, dataType, chartProps }: WidgetContentProps<T, K>) {
    
    // memoize + delay/lazyload?
    const { widgetConfig } = useWidgetContext()
    
    const LzMzContent = useMemo(() => {
        return React.lazy(async () => {
            let summaryProps: SummaryProps, chartData: ChartData<K>, 
            tableData: DataTableRows, statsData: StatsProps['statsData'];
            const widgetLookup: Record<WidgetType | 'stats', JSX.Element | null> = {
                summary: <></>,
                chart: <></>,
                table: <></>,
                stats: null
            }
            if (type == 'summary') {
                summaryProps = await getSummary().then(
                    (summaryRes) => deserializer.summary(dataType, summaryRes))
                widgetLookup.summary = <Summary {...summaryProps}/>
            } else if (type === 'chart') {
                chartData = await getData().then(
                    (dataRes) => deserializer.chart(chartType as K, dataRes, dataType)) as ChartData<K>
                widgetLookup.chart = <Chart chartType={chartType as K} chartData={chartData} chartProps={chartProps as ChartProps<K>}/>
                if (['bigSquare', 'vertical'].includes(widgetConfig.dimension)) {
                    statsData = await getData().then(
                        (dataRes) => deserializer.table(dataType, dataRes))
                    widgetLookup.stats = <Stats statsData={statsData} />
                }
            } else {
                tableData = await getData().then(
                    (dataRes) => deserializer.table(dataType, dataRes))
                widgetLookup.table = <DataTable dataType={dataType} tableRows={tableData}/>
            }
            

            function FinalWidget() {
                // if (widgetLookup['stats'])
                //     return <div className="flex flex-col items-center h-full">
                //         {widgetLookup[type]}
                //         {widgetLookup['stats']}
                //     </div>
                    
                return widgetLookup[type]
            }
            
            
            return ({
                default: FinalWidget
            })
        })
    }, [dataType, chartType, type, chartProps])
    

    return (
    <div className=' p-1 flex justify-center items-center' >
        <Suspense fallback={<Skeleton animation={'linear'} width="100%" height={'200px'} />}>
            <LzMzContent/>
        </Suspense>
    </div>)
}