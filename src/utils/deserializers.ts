import { ChartData, ChartType } from "../components/charts/chartsTypes"
import { SummaryProps, SummaryResponse } from "../components/summary/summaryTypes"
import { Data, DataType } from "../db/dataType"


export const deserializer = {
    chart<T extends ChartType, K extends DataType>(chartType: T, data: Data, dataType: K, columns?: DataType[]): ChartData<T> | undefined {
        console.log(data)
        let seriesLookup = {
            accounting: () => Object.values(data['accounting']),
            marketing: () => data['marketing']['campaigns'].map((o) => o.cost),
            sales: () => data['sales']['top_products'].map((o) => o.sales)
        }
        if (chartType !== "pie" && columns) {
            return columns.map((c) => ({
                name: c.charAt(0).toUpperCase() + c.slice(1),
                data: seriesLookup[c]()
            })) as ChartData<T>
        } else if (chartType === 'pie') {
            return Object.values(data[dataType]) as ChartData<T>
        } else {
            return [{
                name: dataType.charAt(0).toUpperCase() + dataType.slice(1),
                data: seriesLookup[dataType]()
            }] as ChartData<T>
        }
        
    },
    summary<T extends DataType>(dataType: T, data: SummaryResponse): SummaryProps {
        return ({
            text: data[dataType].text,
            highlights: data[dataType].highlighted.map((o) => [o.start, o.end])
        })
    },
    table<T extends DataType>(dataType: T, data: any) {
        data + dataType
    }
}
