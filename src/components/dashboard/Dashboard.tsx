import { useMemo } from "react";
import { useDashboard } from "../../contexts/dashboard";
import { WidgetBase } from "../widget/WidgetBase";
import { NoWidgets } from "./NoWidgets";

export function Dashboard() {
    const { widgetsConfig } = useDashboard()
    const Widgets = useMemo(() => {
        let widgetCfgArr = Object.values(widgetsConfig)
        if (widgetCfgArr.length === 0) return <NoWidgets/>
        return (widgetCfgArr.map((wC) => (
            <WidgetBase key={wC.widgetId} widgetConfig={wC}/>
        )))
    }, [widgetsConfig])

    return (
        <div style={{
            scrollbarWidth: 'none',
            gridTemplateRows: 'repeat(minmax(4, 12), minmax(50px, 1fr))',
            gridTemplateColumns: 'repeat(12, minmax(50px, 1fr))',
        }} className='relative grid max-h-min grid-flow-dense overflow-auto gap-3 p-2'
        >
            {Widgets}
        </div>
    )
}