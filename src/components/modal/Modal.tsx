import {
    Modal,
    ModalBody,
    ModalOverlay,
    Button,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Stack,
    IconButton,
    Square,
} from '@chakra-ui/react'

import { RepeatClockIcon } from '@chakra-ui/icons'
import { useDashboard } from '../../contexts/dashboard'
import { WidgetBase } from '../widget/WidgetBase'
import { ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { ChartType } from '../charts/chartsTypes'
import useWidgetConfig from '../../utils/reducers'
import { WidgetType } from '../widget/widgetsTypes'
import { Dropdown } from '../common/Dropdown'
import { WidgetTheme } from '../../theme/widget'

export function CreateWidgetModal({ onClose, isOpen }: CreateWidgetModalProps) {
    const { addWidget } = useDashboard()
    const {
        widgetConfig,
        setWidgetType,
        // setChartProps,
        setDataType,
        setDimension,
        setTheme,
        setTopbarVariant,
        setChartType,
    } = useWidgetConfig()


    function handleWidgetTypeSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>, manual?:WidgetType) {
        let widgetType = (e.target as HTMLDivElement).getAttribute('aria-label') as WidgetType
        console.log(widgetType)
        if (widgetType !== 'table' && widgetType !== 'summary' && !manual) return;
        setWidgetType(manual ?? widgetType)
    }

    function handleChartTypeSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let chartType = (e.target as HTMLDivElement).getAttribute('aria-label') as ChartType
        setChartType(chartType)
        handleWidgetTypeSelect(e, 'chart')
    }

    function handleThemeChange(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let widgetTheme = (e.target as HTMLButtonElement).getAttribute('aria-label') as WidgetTheme
        setTheme(widgetTheme)
    }


    function handleSaveWidget() {
        let newWidgetId = Date.now().toString()
        let newConfig = { ...widgetConfig }
        newConfig.widgetId = newWidgetId
        addWidget(newWidgetId, newConfig)
        onClose()
    }

    function PlaygroundOverlay() {
        return (
            <div className='absolute inset-0 w-full h-full z-[999] p-2 pointer-events-none'>
                <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between w-full pointer-events-auto'>
                <Dropdown value={widgetConfig.dimension} setValue={setDimension} options={[
                    {label: '1x1', value: 'smallSquare'},
                    {label: '1x2', value: 'vertical'},
                    {label: '2x1', value: 'horizontal'},
                    {label: '2x2', value: 'bigSquare'}
                ]} />
                <Dropdown value={widgetConfig.topbarVariant} setValue={setTopbarVariant} options={[
                    {label: 'Tabs', value: 'tabs'},
                    {label: 'Dropdown', value: 'dropdown'},
                ]} />
                </div>
                <div className='border flex w-full items-center justify-center gap-2'>
                    <div
                    tabIndex={0}
                    onClick={handleThemeChange}
                    className={`size-6 cursor-pointer rounded-full 
                    pointer-events-auto bg-white focus:ring-1 ring-cruxia
                     ring-offset-slate-300 focus:ring-offset-2`}
                    aria-label='light'/>
                    <div
                    tabIndex={0}
                    onClick={handleThemeChange}
                    className={`size-6 cursor-pointer rounded-full 
                    pointer-events-auto bg-cruxia focus:ring-1 ring-cruxia 
                    ring-offset-slate-300 focus:ring-offset-2`}
                    aria-label='inverted'/>
                    <div
                    tabIndex={0} 
                    onClick={handleThemeChange}
                    className={`size-6 cursor-pointer rounded-full 
                    pointer-events-auto bg-black focus:ring-1 ring-cruxia 
                    ring-offset-slate-300 focus:ring-offset-2`}
                    aria-label='dark' />
                </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Modal size={'xl'} colorScheme='cruxia' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent style={{ maxWidth: '80vw', maxHeight: '90vh' }} >
                    <ModalCloseButton />
                    <div className='flex gap-2 w-11/12 items-center justify-start pl-4'>
                        <Square size={10} bg='white' className='border p-2' rounded={'lg'}>
                            <img src='/icons/add_widget.svg' className='size-7' />
                        </Square>
                        <ModalHeader color='cruxia.500' flex={1}>Add Widget</ModalHeader>
                        <Dropdown value={widgetConfig.dataType} setValue={setDataType} options={
                            [{ label: 'Accounting Data', value: 'accounting' },
                            { label: 'Sales Numbers', value: 'sales' },
                            { label: 'Marketing Stats', value: 'marketing' }]} />
                    </div>
                    <hr color='gray' />
                    <ModalBody overflow={'auto'}>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="relative flex justify-center items-center col-span-2 border rounded bg-slate-200">
                                <PlaygroundOverlay />
                                {<WidgetBase widgetConfig={widgetConfig} />}
                            </div>
                            <div className="col-span-1 px-2">
                                <div className='flex-col flex justify-between h-full'>
                                    <div className='mb-6'>
                                        <Stack direction={'column'} spacing={2} justify={'center'}>
                                            <div
                                                onClick={handleWidgetTypeSelect}
                                                aria-label='table'
                                                tabIndex={0} className='border pointer-events-auto p-4 focus:ring-2 focus:ring-cruxia rounded-lg shadow-sm '>
                                                <span className=' pointer-events-none text-md block font-medium text-gray-800'>
                                                    Data
                                                </span>
                                                <span className=' pointer-events-none text-sm font-normal text-slate-500'>
                                                    Random description
                                                </span>
                                            </div>
                                            <div
                                                onClick={handleWidgetTypeSelect}
                                                aria-label='chart'
                                                tabIndex={0} className='border pointer-events-auto focus:ring-2 focus-within:ring-2 ring-cruxia rounded-lg shadow-sm p-4'>
                                                <span className='pointer-events-none text-md block font-medium text-gray-800'>
                                                    Graph
                                                </span>
                                                <span className='pointer-events-none text-sm font-normal text-slate-500'>
                                                    Random description
                                                </span>
                                                <div className='pointer-events-none flex w-fit justify-start gap-1 rounded-md my-1 bg-slate-200 p-1' >
                                                    <div
                                                    aria-label='bar'
                                                    onClick={handleChartTypeSelect} 
                                                    tabIndex={0} 
                                                    className='pointer-events-auto text-slate-500 focus:text-black cursor-pointer p-1 focus:bg-white  rounded-md focus:shadow-sm'>
                                                        <ChartBarIcon color='inherit' className='size-6 pointer-events-none' />
                                                    </div>
                                                    <div 
                                                    aria-label='line'
                                                    onClick={handleChartTypeSelect}
                                                    tabIndex={0} 
                                                    className='pointer-events-auto text-slate-500 focus:text-black cursor-pointer p-1 focus:bg-white rounded-md focus:shadow-sm'>
                                                        <PresentationChartLineIcon color='inherit' className='size-6 pointer-events-none' />
                                                    </div>
                                                    <div 
                                                    aria-label='pie'
                                                    onClick={handleChartTypeSelect}
                                                    tabIndex={0} 
                                                    className='pointer-events-auto text-slate-500 focus:text-black cursor-pointer p-1 focus:bg-white rounded-md focus:shadow-sm'>
                                                        <ChartPieIcon color='inherit' className='size-6 pointer-events-none' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div 
                                            onClick={handleWidgetTypeSelect}
                                            aria-label='summary' 
                                            tabIndex={0} className='border pointer-events-auto p-4 focus:ring-2 focus:ring-cruxia rounded-lg shadow-sm '>
                                                <span className=' pointer-events-none text-md block font-medium text-gray-800'>
                                                    Summary
                                                </span>
                                                <span className=' pointer-events-none text-sm font-normal text-slate-500'>
                                                    Random description
                                                </span>
                                            </div>
                                        </Stack>
                                    </div>
                                    <Stack direction={'row'} spacing={2} justify={'space-around'}>
                                        <IconButton padding={5} aria-label='history' variant={'outline'} color='gray' colorScheme='gray'>
                                            <RepeatClockIcon className='size-7' />
                                        </IconButton>
                                        <Button padding={5} fontWeight={500} color='gray' colorScheme='gray' variant={'outline'}
                                            onClick={onClose}>
                                            Back</Button>
                                        <Button padding={5} fontWeight={500} colorScheme='cruxia' variant={'solid'}
                                            onClick={handleSaveWidget}>
                                            Save</Button>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}