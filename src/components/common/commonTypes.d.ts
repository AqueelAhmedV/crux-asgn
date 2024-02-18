import { PropsWithChildren, SetStateAction } from "react";

interface WidgetContainerProps extends PropsWithChildren {
    dimension: 'smallSquare' | 'horizontal' | 'vertical' | 'bigSquare'
}

type DaysOptions = 1 | 7 | 14 | 30

interface WidgetTopbarProps {
    variant: 'dropdown' | 'tabs',
    activeTab: DaysOptions,
    setActiveTab: React.Dispatch<SetStateAction<DaysOptions>>
}

interface WidgetTopbarDataItem {
    label: string,
    value: DaysOptions
}

type WidgetTopbarData = WidgetTopbarDataItem[]