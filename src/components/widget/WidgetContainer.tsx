import { useEffect } from "react"
import { useWidgetContext } from "../../contexts/widget/themeContext"
import { WidgetContainerProps } from "./widgetsTypes"


export function WidgetContainer({ children, dimension, widgetConfig }: WidgetContainerProps) {
    const { setWidgetConfig, setWidgetTheme, widgetTheme } = useWidgetContext()

    useEffect(() => {
        setWidgetConfig(widgetConfig)
        setWidgetTheme(widgetConfig.theme)
    }, [widgetConfig])


    const dimensionClasses = {
        smallSquare: ' col-span-2 row-span-2  ',
        horizontal: '   col-span-4 row-span-2 ',
        vertical: '  col-span-2 row-span-4 ',
        bigSquare: '  col-span-4 row-span-4 '
    }

    return (<div style={{ backgroundColor: widgetTheme.content.bg }} 
    className={" border rounded-lg shadow-md oveflow-hidden" + dimensionClasses[dimension]} >
        {children}
    </div>)
}