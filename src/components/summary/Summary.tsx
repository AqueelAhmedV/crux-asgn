import { Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useWidgetTheme } from "../../contexts/widget/themeContext";
import type { SummaryProps, } from "./summaryTypes";


export function Summary({ text, highlights }: SummaryProps) {

    const { widgetTheme } = useWidgetTheme()

    const renderedText = useMemo(() => {
        if (!highlights || !text) return '';
        // check no overlap?
        let finalHtml = text.slice();
        for (let i = 0; i<highlights.length; i++) {
            highlights[i][0] += i*7
            highlights[i][1] += i*7
            finalHtml = `${finalHtml.slice(0, highlights[i][0])}<b>${finalHtml.slice(highlights[i][0], highlights[i][1])}</b>${finalHtml.slice(highlights[i][1])}`
        }
        return <span className='line-clamp-6' dangerouslySetInnerHTML={{ __html: finalHtml }}></span>
    }, [highlights, text])
    
    // \u003C/b\u003E

    return (
        <div className="max-h-full">
        {/* <button onClick={() => setReload(Date.now())}>click</button> */}
        <Text
        sx={{
            b: {
                color: widgetTheme.content.focus
            }
        }}
        fontSize={"small"}
        className=" overflow-hidden"
        style={{ paddingTop: 3, paddingBottom: 3,   }}
        color={widgetTheme.content.color} bgColor={widgetTheme.content.bg} padding={4} 
        >{renderedText}
        </Text>
        </div>
    )
}