import { useMemo } from "react";
import { type WidgetTopbarData, type WidgetTopbarProps } from "./widgetsTypes";

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Dropdown } from "../common/Dropdown";

import {
    // TabPanel,
    // TabPanels,
    IconButton,

} from '@chakra-ui/react'
import { TabSwitch } from "../common/TabSwitch";
import { useWidgetTheme } from "../../contexts/widget/themeContext";


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

    
    function MoreButton({  }) {

        const { widgetTheme } = useWidgetTheme()

        return <IconButton
            isRound
            aria-label="more_button"
            _hover={{ bg: "transparent" }}
            bg={"transparent"}>
            <EllipsisHorizontalIcon className="active:text-cruxia w-7 h-7" color={widgetTheme.topbar.lines} />
        </IconButton>
    }


    return (

        <div className="text-xs flex w-full h-fit justify-between px-2 border-b">
            <div className="flex w-3/4 overflow-y-hidden overflow-x-auto " 
            style={{ scrollPadding: 0, scrollMargin: 0, scrollbarWidth: 'none' }}>
                {TabHeaderContent}
            </div>
            <div>
                <Dropdown value={''} setValue={() => { }} buttonEl={MoreButton} buttonElProps={{
                    options: [
                        { label: 'Delete', value: 'delete' }
                    ]
                }} options={[
                    { label: 'Delete', value: 'delete' }
                ]} />
            </div>
        </div>


    );
}
