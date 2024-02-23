import { 
    Modal,
    ModalBody,
    ModalOverlay,
    Button,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    Text,
} from '@chakra-ui/react'

export function CreateWidgetModal({ onClose, isOpen }: CreateWidgetModalProps) {

    return (
        <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>
                Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. 
                Sapiente libero odit incidunt.
                Nesciunt quae ipsum quo? Quasi est 
                accusantium sequi laborum ipsam autem, 
                quo incidunt voluptatibus veniam fuga vero atque.
                </Text>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}