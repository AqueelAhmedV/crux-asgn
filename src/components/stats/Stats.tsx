import { useWidgetContext } from "../../contexts/widget/themeContext"


export function Stats({ statsData }: StatsProps) {

    const colors = ["#00ee00", "#ff8f00", 
    "#00897b", "#1e88e5", "#d81b60", "#f41"]

    const { widgetTheme } = useWidgetContext()
    return (
        <div className="flex flex-col justify-around">
            { statsData.map((s, i) => (<div className="border-l-4 flex flex-col gap-2 items-baseline justify-center" style={{ borderColor: colors[i%colors.length] }}>
                    <span color={widgetTheme.content.focus} className="capitalize text-sm font-medium">
                        {s.label}
                    </span>
                    <span color={widgetTheme.content.color} className="text-xs text-slate-400">
                        {s.value}
                    </span>
                </div>)
                )
            }
        </div>
    )
}