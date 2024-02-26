

export function Stats({ statsData }: StatsProps) {

    const colors = ["#00ee00", "#ff8f00", 
    "#00897b", "#1e88e5", "#d81b60", "#f41"]
    return (
        <div className="flex flex-col justify-around">
            { statsData.map((s, i) => (<div className="border-l-4 " style={{ borderColor: colors[i%colors.length] }}>
                    <span className="text-sm font-medium text-slate-600">
                        {s.label}
                    </span>
                    <span className="text-xs text-slate-400">
                        {s.value}
                    </span>
                    </div>)
                )
            }
        </div>
    )
}