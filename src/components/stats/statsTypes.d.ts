

interface StatsItem {
    label: string,
    value: string | number
}

type StatsProps = {
    statsData: Array<StatsItem>
}
