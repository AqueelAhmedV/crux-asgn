import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useWidgetTheme } from "../../contexts/widget/themeContext";
import { TabSwitchProps } from "./commonTypes";


export function TabSwitch<T>({ setActiveTab, options }: TabSwitchProps<T>) {
    const { widgetTheme } = useWidgetTheme()
    return (
        <Tabs className="">
            <TabList>
                {options.slice(1).map(({ label, value }) => (
                <Tab
                    key={value+''}
                    value={value+''}
                    onClick={() => setActiveTab(value)}
                    _focus={{
                        color: widgetTheme.topbar.focus
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