import './App.css'
import { CreateWidgetModal } from './components/modal/Modal'
import { WidgetContent } from './components/widget/WIdgetContent'
import { WidgetBase } from './components/widget/WidgetBase'
import { 
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  useDisclosure,
  Button
} from '@chakra-ui/react'

const { 
  Button: Btn,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
}:any = chakraTheme.components



const theme = extendBaseTheme({
  components: {
    Btn,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    IconButton,
    Modal
  },
  colors: {
    cruxia: '#5E5ADB'
  }
})

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure({})
   return (
    <>
    <ChakraBaseProvider theme={theme}>
    <div><Button onClick={onOpen}>Create Widget</Button></div>
      <div><CreateWidgetModal isOpen={isOpen} onClose={onClose} /></div>
      
      <div className='sm:grid-cols-10 md:grid grid-cols-12 sm:grid-rows-10 md:grid-rows-12 grid-flow-dense gap-3  h-4/5'>
      
      <WidgetBase topbarVariant='dropdown' dimension='bigSquare'>
      </WidgetBase>

      <WidgetBase topbarVariant='dropdown' dimension='vertical'>
          <WidgetContent type='chart' dataType='accounting' chartType='line' chartProps={{
            chartHeight: '100%',
            recordsCount: 4
          }}/>
        </WidgetBase>
        <WidgetBase topbarVariant='dropdown' dimension='horizontal'>
          <WidgetContent type='summary' dataType='accounting' />
        </WidgetBase>
        <WidgetBase topbarVariant='dropdown' dimension='smallSquare'>
          <WidgetContent type='table' dataType='accounting' />
        </WidgetBase>
        {/* <WidgetBase topbarVariant='tabs' dimension='bigSquare'>
          <WidgetContent />  
        </WidgetBase>
        <WidgetBase topbarVariant='dropdown' dimension='vertical'>
          <WidgetContent/>
        </WidgetBase>
        <WidgetBase topbarVariant='tabs' dimension='smallSquare'>
          <WidgetContent/>
        </WidgetBase>
        <WidgetBase topbarVariant='dropdown' dimension='horizontal'>
          <WidgetContent/>  
        </WidgetBase>
        
        <WidgetBase topbarVariant='tabs' dimension='smallSquare'>
          <WidgetContent />
        </WidgetBase>
        
        <WidgetBase dimension='smallSquare' topbarVariant='dropdown'>
          <WidgetContent/>
        </WidgetBase>
        <WidgetBase dimension='bigSquare' topbarVariant='tabs'>
          <WidgetContent/>
        </WidgetBase>
        <WidgetBase dimension='horizontal' topbarVariant='dropdown'>
          <WidgetContent/>
        </WidgetBase> */}
      </div>
      </ChakraBaseProvider>
    </>
  )
}

export default App
