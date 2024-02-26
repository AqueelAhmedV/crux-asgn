import { useWidgetContext } from '../../contexts/widget/themeContext'
import { DataType } from '../../db/dataType'
import { DataTableProps } from './tableTypes'

export function DataTable<T extends DataType>({ dataType, tableRows  }: DataTableProps<T>) {

    const { widgetTheme } = useWidgetContext()

    const tableHeaderLookup = {
      accounting: { left: 'Type', right: 'Amount' },
      sales: { left: 'Product', right: 'Sales' },
      marketing: { left: 'Campaign', right: 'Cost' }
    }

    return (
    <div 
      style={{ color: widgetTheme.content.color, backgroundColor: widgetTheme.content.bg }} 
      className="max-w-full h-full">
      <table className=" max-w-full text-xs whitespace-nowrap text-ellipsis table-auto">
        <thead>
          <tr className='uppercase flex justify-around'>
            <th style={{ color: widgetTheme.topbar.focus }} className="px-2 py-1">
              {tableHeaderLookup[dataType].left}</th>
            <th style={{ color: widgetTheme.topbar.focus }} className="px-2 py-1">
              {tableHeaderLookup[dataType].right}
            </th>
          </tr>
        </thead>
        <tbody className='max-w-full'>
          {
            tableRows.map(({ label, value }) => (
              <tr className='flex justify-around'>
                <td className=" justify-self-start capitalize px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">{label}</td>
                <td className=" justify-self-start px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">{value}</td>
              </tr>
            ))
          }
          </tbody>
      </table>
  </div>
  )
}