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
    Box,
    Circle,
} from '@chakra-ui/react'

import { RepeatClockIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useDashboard } from '../../contexts/dashboard'
import { WidgetBase } from '../widget/WidgetBase'
import { ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { ChartType } from '../charts/chartsTypes'
import useWidgetConfig from '../../utils/reducers'
import { WidgetType } from '../widget/widgetsTypes'
import { Dropdown } from '../common/Dropdown'

export function CreateWidgetModal({ onClose, isOpen }: CreateWidgetModalProps) {
    const { addWidget, defaultWidgetConfig } = useDashboard()
    const {
        widgetConfig,
        setWidgetType,
        setChartProps,
        setDataType,
        setDimension,
        setTheme,
        setTopbarVariant,
        setChartType
    } = useWidgetConfig()

    useEffect(() => {
        console.log(widgetConfig)
    }, [widgetConfig])


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


    function handleSaveWidget() {
        addWidget(Date.now().toString(), widgetConfig)
        onClose()
    }

    function PlaygroundOverlay() {
        return (
            <div className='absolute inset-0 w-full h-full z-[999] p-2 pointer-events-none'>
                <div className='flex flex-col justify-between h-full'>
                <div className='flex w-full pointer-events-auto'>
                <Dropdown value={widgetConfig.dimension} setValue={setDimension} options={[
                    {label: '1x1', value: 'smallSquare'},
                    {label: '1x2', value: 'horizontal'},
                    {label: '2x1', value: 'vertical'},
                    {label: '2x2', value: 'bigSquare'}
                ]} />
                </div>
                <div className='border z-[999] flex w-full items-center justify-center gap-2'>
                    <Circle size={10} aria-label='white' color={'cruxia.400'}/>
                    <Circle size={10} aria-label='inverted' color={'white'}/>
                    <Circle size={10} aria-label='dark' color={'black'} _focus={{ ring: 2, ringColor: 'cruxia.200' }}/>
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
                        <div className="grid grid-cols-4 gap-4">
                            <div className="relative grid place-items-center grid-cols-10 col-span-3 border rounded bg-slate-200">
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
                                                tabIndex={0} className='pointer-events-auto p-4 focus:ring-2 focus:ring-cruxia rounded-lg shadow-md '>
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
                                                tabIndex={0} className=' pointer-events-auto focus:ring-2 focus-within:ring-2 ring-cruxia rounded-lg shadow-md p-4'>
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
                                            tabIndex={0} className=' pointer-events-auto p-4 focus:ring-2 focus:ring-cruxia rounded-lg shadow-md '>
                                                <span className=' pointer-events-none text-md block font-medium text-gray-800'>
                                                    Summary
                                                </span>
                                                <span className=' pointer-events-none text-sm font-normal text-slate-500'>
                                                    Random description
                                                </span>
                                            </div>
                                        </Stack>
                                    </div>
                                    <Stack direction={'row'} spacing={3} justify={'space-around'}>
                                        <IconButton aria-label='history' variant={'outline'} color='gray' colorScheme='gray'>
                                            <RepeatClockIcon className='size-7' />
                                        </IconButton>
                                        <Button fontWeight={500} color='gray' colorScheme='gray' variant={'outline'}
                                            onClick={onClose}>
                                            Back</Button>
                                        <Button fontWeight={500} colorScheme='cruxia' variant={'solid'}
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