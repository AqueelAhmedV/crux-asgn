import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useWidgetTheme } from "../../contexts/widget/themeContext";
import { TabSwitchProps } from "./commonTypes";


export function TabSwitch<T>({ setActiveTab, options }: TabSwitchProps<T>) {
    const { widgetTheme } = useWidgetTheme()
    return (
        <Tabs height={'100%'} className="">
            <TabList height={'100%'} borderBottomWidth={'1px'}  className="">
                {options.slice(1).map(({ label, value }) => (
                <Tab
                    key={value+''}
                    value={value+''}
                    onClick={() => setActiveTab(value)}
                    // _focus={{
                    //     color: widgetTheme.topbar.focus
                    // }}
                    _selected={{
                        color: widgetTheme.topbar.focus,
                        borderColor: widgetTheme.topbar.focus,
                        borderBottomWidth: '4px'
                    }}
                    color={widgetTheme.topbar.color}
                >
                    {label}
                </Tab>
                ))}
            </TabList>
        </Tabs>
    )
}