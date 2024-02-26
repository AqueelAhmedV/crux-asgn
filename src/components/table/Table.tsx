import { useWidgetTheme } from '../../contexts/widget/themeContext'

export function DataTable() {

    const { widgetTheme } = useWidgetTheme()

    return (
    <div 
      style={{ color: widgetTheme.content.color, backgroundColor: widgetTheme.content.bg }} 
      className="max-w-full h-full">
      <table className=" max-w-full text-xs whitespace-nowrap text-ellipsis table-auto">
        <thead>
          <tr className='uppercase'>
            <th style={{ color: widgetTheme.topbar.focus }} className="px-2 py-1">Product</th>
            <th style={{ color: widgetTheme.topbar.focus }} className="px-2 py-1">Sales</th>
          </tr>
        </thead>
        <tbody className='max-w-full'>
          <tr className=''>
            <td className=" max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">Product A</td>
            <td className=" max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">150,000 units</td>
          </tr>
          <tr>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product B</td>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">120,000 units</td>
          </tr>
          <tr>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product C</td>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">100,000 units</td>
          </tr>
          <tr>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">Product D</td>
            <td className="max-w-7 px-2 py-1 whitespace-nowrap overflow-hidden overflow-ellipsis">200,000 units</td>
          </tr>
          </tbody>
      </table>
  </div>
  )
}