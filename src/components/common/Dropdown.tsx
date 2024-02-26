
import { DropdownProps } from "./commonTypes"
import { useWidgetContext } from "../../contexts/widget/themeContext"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import React from "react"

export function Dropdown<T>({ value, setValue, options, buttonEl, buttonElProps }: DropdownProps<T>) {
    const { widgetTheme } = useWidgetContext()

    function MenuTrigger() {

        return ( <MenuButton color={widgetTheme.topbar.focus}>
            <div className="flex items-center space-x-2">
                <span>{options.find(o => o.value === value)?.label}</span>
                <ChevronDownIcon className="w-4 h-5"/>
            </div>
        </MenuButton>)
    }


    return (
            <Menu>
                {buttonEl && React.createElement(buttonEl, {...buttonElProps, })}
                {!buttonEl && <MenuTrigger />}
                <MenuList bgColor={widgetTheme.topbar.bg}  color={widgetTheme.topbar.color}>
                    {
                        options.map(({ label, value }) => (
                            <MenuItem 
                            bgColor={widgetTheme.topbar.bg}
                            key={value+''}
                            _active={{
                                color: widgetTheme.topbar.focus,
                            }}
                            _hover={{
                                color: widgetTheme.topbar.focus,
                            }}
                            onClick={(_e) => setValue(value)} value={value+''}>{label}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
       )
}