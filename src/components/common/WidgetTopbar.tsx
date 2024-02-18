import { useMemo } from "react";
import { WidgetTopbarData, WidgetTopbarProps } from "./commonTypes";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option
} from "@material-tailwind/react";

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

    const activeTabText = data.find((d) => d.value === activeTab)?.label


    const TabHeaderContent = useMemo(() => {
        const tabHeaderLookup = {
            dropdown: (<div><Select placeholder={''} variant="standard" label={activeTabText}>
                {data.map(({ label, value }) => {
                    return <Option key={value}>{label}</Option>
                })}
            </Select></div>),
            tabs: data.map(({ label, value }) => (
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
        <Tabs value={activeTab}>
            <TabsHeader
                placeholder=''
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {TabHeaderContent}
            </TabsHeader>
            <TabsBody placeholder=''>
                {data.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                        {value}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
