import { Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useWidgetTheme } from "../../contexts/widget/themeContext";


export function Summary({ text, highlights }: SummaryProps) {

    const { widgetTheme } = useWidgetTheme()

    const renderedText = useMemo(() => {
        if (!highlights) return '';
        // check no overlap?
        let finalHtml = text.slice();
        for (let i = 0; i<highlights.length; i++) {
            highlights[i][0] += i*7
            highlights[i][1] += i*7
            finalHtml = `${finalHtml.slice(0, highlights[i][0])}<b>${finalHtml.slice(highlights[i][0], highlights[i][1])}</b>${finalHtml.slice(highlights[i][1])}`
        }
        return finalHtml
    }, [highlights.length, text])

    return (
        <>
        {/* <button onClick={() => setReload(Date.now())}>click</button> */}
        <Text 
        fontSize={"small"} 
        color={widgetTheme.content.color} bgColor={widgetTheme.content.bg} padding={4} 
        dangerouslySetInnerHTML={{ __html: renderedText }}>    
        </Text>
        </>
    )
}