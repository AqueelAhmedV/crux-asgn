import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useWidgetTheme } from '../../contexts/widget/themeContext'

export function DataTable() {

    const { widgetTheme } = useWidgetTheme()

    return (<div style={{ color: widgetTheme.content.color, backgroundColor: widgetTheme.content.bg }} className=" size-4/5">
    <div className=" ">
      <table className=" inline-table text-xs whitespace-nowrap text-ellipsis table-auto">
        <thead>
          <tr className='uppercase'>
            <th className="px-2 py-1">Product</th>
            <th className="px-2 py-1">Sales</th>
          </tr>
        </thead>
        <tbody className=' '>
          <tr>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product A</td>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">150,000 units</td>
          </tr>
          <tr>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product B</td>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">120,000 units</td>
          </tr>
          <tr>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product C</td>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">100,000 units</td>
          </tr>
          <tr>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product D</td>
            <td className="px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">200,000 units</td>
          </tr>
          </tbody>
      </table>
    </div>
  </div>
  )
}