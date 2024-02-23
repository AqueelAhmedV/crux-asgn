
type TextHighlight = [number, number]

interface SummaryProps {
    text: string;
    highlights: Array<TextHighlight>;
}