import { DataType } from "../../db/dataType";

type TextHighlight = [number, number]

interface SummaryProps {
    text: string;
    highlights: Array<TextHighlight>;
}


interface SummaryResponseHighlighted {
    start: number,
    end: number
}
interface SummaryResponseData {
    text: string;
    highlighted: Array<SummaryResponseHighlighted>
}

type SummaryResponse = Record<DataType, SummaryResponseData>