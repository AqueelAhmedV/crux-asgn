import React, { useMemo } from "react";
import { type WidgetTopbarData, type WidgetTopbarProps } from "./widgetsTypes";

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Dropdown } from "../common/Dropdown";

import {
    // TabPanel,
    // TabPanels,
    IconButton, IconButtonProps, Menu, MenuButton, MenuItem, MenuList, 

} from '@chakra-ui/react'
import { TabSwitch } from "../common/TabSwitch";
import { useWidgetContext } from "../../contexts/widget/themeContext";
import { useDashboard } from "../../contexts/dashboard";


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



    const TabHeaderContent = useMemo(() => {
        const tabHeaderLookup = {
            dropdown: (<Dropdown options={data} value={activeTab} setValue={setActiveTab} />),
            tabs: (<TabSwitch options={data} setActiveTab={setActiveTab} />)
        }

        return tabHeaderLookup[variant]
    }, [variant, data, activeTab, setActiveTab])

    const { widgetTheme, widgetConfig } = useWidgetContext()
    
    function MoreButton(props: React.Attributes & Partial<IconButtonProps>) {
        return <IconButton
            {...props}
            isRound
            aria-label="more_button"
            _hover={{ bg: "transparent" }}
            bg={"transparent"}>
            <EllipsisHorizontalIcon className="active:text-cruxia w-7 h-7" color={widgetTheme.topbar.lines} />
        </IconButton>
    }

    const { removeWidget } = useDashboard() 

    const options = useMemo(() => [
        {label: 'Delete', action: () => {
            console.log('DELETE', widgetConfig.widgetId, widgetConfig); 
            widgetConfig.widgetId && removeWidget(widgetConfig.widgetId)
        }}
    ], [widgetConfig])

    // function MenuTrigger() {
    //     return    _active: { color: 'cruxia.400' }
    //     })
    // }

    return (

        <div className="text-xs flex w-full h-fit justify-between px-2 border-b">
            <div className="flex w-3/4 overflow-y-hidden overflow-x-auto " 
            style={{ scrollPadding: 0, scrollMargin: 0, scrollbarWidth: 'none' }}>
                {TabHeaderContent}
            </div>
            <div>
            <Menu preventOverflow>
                <MoreButton as={MenuButton}/>
                <MenuList bgColor={widgetTheme.topbar.bg}  color={widgetTheme.topbar.color}>
                    {
                        options.map(({ label, action }) => (
                            <MenuItem 
                            bgColor={widgetTheme.topbar.bg}
                            key={label}
                            _active={{
                                color: widgetTheme.topbar.focus,
                            }}
                            _hover={{
                                color: widgetTheme.topbar.focus,
                            }}
                            onClick={action}>{label}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
            </div>
        </div>


    );
}
