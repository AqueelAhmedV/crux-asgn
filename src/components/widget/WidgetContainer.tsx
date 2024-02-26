import { useEffect } from "react"
import { useWidgetTheme } from "../../contexts/widget/themeContext"
import { WidgetContainerProps } from "./widgetsTypes"


export function WidgetContainer({ children, dimension, theme }: WidgetContainerProps) {
    const { setWidgetTheme, widgetTheme } = useWidgetTheme()

    // temporary
    useEffect(() => {
        setWidgetTheme(theme)
    }, [theme])

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