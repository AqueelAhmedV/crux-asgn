import type { DaysOptions, WidgetBaseProps } from './widgetsTypes'
import { WidgetTopbar } from './WidgetTopbar.tsx'
import { useState } from 'react'
import { WidgetThemeProvider } from '../../contexts/widget/themeContext'
import { WidgetContainer } from './WidgetContainer.tsx';
import { WidgetContent } from './WidgetContent.tsx';


export function WidgetBase({ widgetConfig }: WidgetBaseProps) {

    const [activeTab, setActiveTab] = useState<DaysOptions>(7);


    return (
        <WidgetThemeProvider>
            <WidgetContainer widgetConfig={widgetConfig} dimension={widgetConfig.dimension}>
                <WidgetTopbar variant={widgetConfig.topbarVariant} activeTab={activeTab} setActiveTab={setActiveTab} />
                {/* <span className='text-red-500'>{widgetConfig.dimension}</span> */}
                <WidgetContent 
                    type={widgetConfig.type}
                    dataType={widgetConfig.dataType}
                    chartType={widgetConfig?.chartType}
                    chartProps={widgetConfig?.chartProps}
                />
            </WidgetContainer>
        </WidgetThemeProvider>
    )
}