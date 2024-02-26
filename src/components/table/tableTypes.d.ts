import { type DataType } from "../../db/dataType"

interface TableRowItem {
    label: string,
    value: string | number
}

type DataTableRows = Array<TableRowItem>

type DataTableProps<T extends DataType> = {
    dataType: T,
    tableRows: DataTableRows
}