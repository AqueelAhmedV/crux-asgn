import { useMemo } from "react";
// import './Common.css'
import { DaysOptions, WidgetTopbarData, WidgetTopbarProps } from "./commonTypes";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
    IconButton
} from "@material-tailwind/react";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'


export function WidgetTopbar({ variant, activeTab, setActiveTab }: WidgetTopbarProps) {
    const data: WidgetTopbarData = [
        {
            label: "Today",
            value: 1,
        },
        {
            label: "7d",
            value: 7,
        },
        {
            label: "14d",
            value: 14,
        },
        {
            label: "30d",
            value: 30,
        },
    ];

    const activeTabText = useMemo(() => data.find((d) => d.value === activeTab)?.label, [activeTab])


    const TabHeaderContent = useMemo(() => {
        const tabHeaderLookup = {
            dropdown: (<div>
                <Select placeholder={'Select Day'} 
                variant="standard" value={''+activeTab} onChange={(val) => setActiveTab(parseInt(val ?? '') as DaysOptions)}>
                {data.map(({ label, value }) => {
                    return <Option key={value}>{label}</Option>
                })}
            </Select></div>),
            tabs: data.slice(1).map(({ label, value }) => (
                    <Tab
                        placeholder={''}
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                ))
        }

        return tabHeaderLookup[variant]
    }, [variant])


    return (
        <Tabs value={activeTab} >
            <TabsHeader
                placeholder=''
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 pt-1 flex justify-between"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                <div className="w-1/4 rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex justify-between">
                {TabHeaderContent}
                </div>
                <div>
                    <IconButton variant="text" placeholder=''>
                        <EllipsisHorizontalIcon className="w-7 h-7" color="grey"/>
                    </IconButton>
                </div>
            </TabsHeader>
            {/* <TabsBody placeholder=''>
                {data.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                        {value}
                    </TabPanel>
                ))}
            </TabsBody> */}
        </Tabs>
    );
}
