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
        return <IconButton
            isRound
            aria-label="more_button"
            _hover={{ bg: "transparent" }}
            bg={"transparent"}>
            <EllipsisHorizontalIcon className="active:text-cruxia w-7 h-7" color="grey" />
        </IconButton>
    }


    return (

        <div className="flex w-full justify-between px-2 border-b">
            <div className="flex w-1/3">
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
