import { useState } from 'react'
import './App.css'
import { BarChart } from './components/charts/BarChart'
import { LineChart } from './components/charts/LineChart'
import { PieChart } from './components/charts/PieChart'
import { WidgetContainer } from './components/common/WidgetContainer'
import { WidgetTopbar } from './components/common/WidgetTopbar'
import { DaysOptions } from './components/common/commonTypes'

function App() {
  const [activeTab, setActiveTab] = useState<DaysOptions>(7);
  return (
    <>
      <div className='grid grid-cols-12 grid-rows-12 grid-flow-dense gap-3  w-full'>
      <WidgetContainer dimension='horizontal'>
          <BarChart recordsCount={3} barWidth='60%' chartHeight='100%' />
        </WidgetContainer>
        <WidgetContainer dimension='bigSquare'>
          <WidgetTopbar variant='dropdown' activeTab={activeTab} setActiveTab={setActiveTab}/>
          <LineChart recordsCount={4} chartHeight=''/>
        </WidgetContainer>
        <WidgetContainer dimension='vertical'>
          <PieChart chartDiameter={"100%"} />
        </WidgetContainer>
        <WidgetContainer dimension='smallSquare'>
        <WidgetTopbar variant='tabs' activeTab={activeTab} setActiveTab={setActiveTab}/>
          <PieChart chartDiameter={''} />
        </WidgetContainer>
        <WidgetContainer dimension='horizontal'>
          <BarChart recordsCount={3} barWidth='60%' chartHeight='100%' />
        </WidgetContainer>
        
        <WidgetContainer dimension='smallSquare'>
          <PieChart chartDiameter={"100%"} />
        </WidgetContainer>
        
        <WidgetContainer dimension='smallSquare'>
          <PieChart chartDiameter={"100%"} />
        </WidgetContainer>
        <WidgetContainer dimension='bigSquare'>
          <PieChart chartDiameter={"100%"} />
        </WidgetContainer>
        <WidgetContainer dimension='horizontal'>
          <BarChart recordsCount={3} barWidth='60%' chartHeight='100%' />
        </WidgetContainer>
      </div>
    </>
  )
}

export default App
