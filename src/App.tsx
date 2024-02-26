import './App.css'
import { 
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { Landing } from './pages/Landing'

const { 
  Button,
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
  CloseButton,
  Circle
}:any = chakraTheme.components



const theme = extendBaseTheme({
  components: {
    Button,
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
    Modal,
    CloseButton,
    Circle
  },
  colors: {
    cruxia: {
      50: '#E6E9FF', 
      100: '#CECFFF', 
      200: '#B3B9FF', 
      300: '#99A2FF', 
      400: '#5E5ADB', 
      500: '#7471E5', // Moved from 400, then +50
      600: '#8A7FEF', // #7471E5 + 50
      700: '#A088F8', // #7471E5 + 100
      800: '#B19FFF', // #7471E5 + 150
      900: '#BDAAFF', // #7471E5 + 200
  }
  
  }
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Landing/>
    </ChakraBaseProvider> 
  )
}

export default App
