import { Attributes, Dispatch, FunctionComponent, PropsWithChildren, SetStateAction } from "react";


interface DropdownOption<T> {
    label: string | JSX.Element,
    value: T
}

interface DropdownTriggerProps extends Attributes {
    options: Array<DropdownOption<any>>,
    onClose: () => void;
    onOpen: () => void;
}
interface DropdownProps<T> extends PropsWithChildren {
    value: T;
    setValue: Dispatch<SetStateAction<T>> | ((val:T) => void);
    options: Array<DropdownOption<T>>,
    buttonEl?: FunctionComponent,
    buttonElProps?: DropdownTriggerProps
}

interface TabSwitchProps<T> {
    activeTab?: T;
    setActiveTab: Dispatch<SetStateAction<T>>;
    options: Array<DropdownOption<T>>   
}
