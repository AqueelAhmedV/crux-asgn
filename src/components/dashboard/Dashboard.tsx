import { useDashboard } from "../../contexts/dashboard";
import { WidgetBase } from "../widget/WidgetBase";

export function Dashboard() {

    const { widgetsConfig } = useDashboard()
    return (
        <div style={{
            scrollbarWidth: 'none',
            gridTemplateRows: 'repeat(minmax(4, 12), minmax(50px, 1fr))',
            gridTemplateColumns: 'repeat(12, minmax(50px, 1fr))',
        }} className='grid max-h-min grid-flow-dense overflow-auto gap-3 p-2'
        >
            {Object.values(widgetsConfig).map((wC) => (
                <WidgetBase widgetConfig={wC}/>
            ))}
        </div>
    )
}