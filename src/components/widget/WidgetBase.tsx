import { DaysOptions, WidgetBaseProps } from './widgetsTypes'
import { WidgetTopbar } from './WidgetTopbar'
import { useState } from 'react'
import { WidgetThemeProvider } from '../../contexts/widget/themeContext'


export function WidgetBase({ children, dimension, topbarVariant }: WidgetBaseProps) {
    const dimensionClasses = {
        smallSquare: ' col-span-2 row-span-2  ',
        horizontal: '   col-span-4 row-span-2 ',
        vertical: '  col-span-2 row-span-4 ',
        bigSquare: '  col-span-4 row-span-4 '
    }

    const [activeTab, setActiveTab] = useState<DaysOptions>(7);

    return (
        <WidgetThemeProvider>
        <div 
        className={"object-contain border rounded-lg shadow-md oveflow-hidden" + dimensionClasses[dimension]} >
            
            <WidgetTopbar activeTab={activeTab} setActiveTab={setActiveTab} variant={topbarVariant}></WidgetTopbar>
            <div className='p-0 flex justify-center items-center' >
                {children}
            </div>
        </div>
        </WidgetThemeProvider>
    )
}