import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    ModalCloseButton,
  } from '@chakra-ui/react'


const ExpenseCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
  return (<>
  
      
    <Button onClick={onOpen}>Add Expense</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add your Expense</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Input placeholder='$-amount' />
                        </FormControl>

                        <FormControl mt={4}>
                        <FormLabel>Tag</FormLabel>
                        <Input placeholder='#tag' />
                        </FormControl>

                        <FormControl mt={4}>
                        <FormLabel>Date</FormLabel>
                        <Input placeholder='DD-MM-YYYY' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                        Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
            </ModalContent>
        </Modal>
    
    </>
  )
}

export default ExpenseCard