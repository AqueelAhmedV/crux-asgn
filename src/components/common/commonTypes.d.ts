import { Attributes, Dispatch, FunctionComponent, PropsWithChildren, SetStateAction } from "react";


interface DropdownOption<T> {
    label: string,
    value: T
}

interface DropdownTriggerProps extends Attributes {
    options: Array<DropdownOption<any>>
}
interface DropdownProps<T> extends PropsWithChildren {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    options: Array<DropdownOption<T>>,
    buttonEl?: FunctionComponent,
    buttonElProps?: DropdownTriggerProps
}

interface TabSwitchProps<T> {
    activeTab?: T;
    setActiveTab: Dispatch<SetStateAction<T>>;
    options: Array<DropdownOption<T>>   
}
