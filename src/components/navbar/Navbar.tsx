import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { Cog6ToothIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CreateWidgetModal } from "../modal/Modal";
import { CloseIcon } from "@chakra-ui/icons";


export function Navbar() {
    const { onOpen, onClose, isOpen } = useDisclosure()

    return (
        <nav className="flex justify-between items-center h-full px-4">
            <div className="flex gap-2">
                <IconButton bg="transparent" color={"gray"} aria-label="home"><HomeIcon className="size-5"/></IconButton>
                <Button fontWeight={500} color="gray" rounded={'lg'} colorScheme="gray" variant={'outline'}>
                    Overview</Button>
                <Button fontWeight={500} rounded={'lg'} variant={'outline'} colorScheme="cruxia" 
                rightIcon={<CloseIcon ml={1} h={3} w={3}/>}>
                    Customers</Button>
                <Button fontWeight={500} color="gray" rounded={'lg'} colorScheme="gray" variant={'outline'}>
                    Settings</Button>
                <Button fontWeight={500} color="gray" rounded={'lg'} colorScheme="gray" variant={'outline'}>
                    Products</Button>
            </div>
            <div className="flex gap-2">
                <Button fontWeight={500} onClick={onOpen} leftIcon={<PlusIcon className="size-6"/>} variant={'outline'} colorScheme="cruxia">
                    Add Widget</Button>
                <CreateWidgetModal onClose={onClose} isOpen={isOpen}/>
                <IconButton bg="transparent" color={"gray"} aria-label="home">
                    <Cog6ToothIcon className="size-6"/>
                </IconButton>
            </div>
        </nav>
    )
}