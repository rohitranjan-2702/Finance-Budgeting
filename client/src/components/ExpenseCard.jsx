import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack,NumberInput,
  NumberInputField } from '@chakra-ui/react';

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
  
      
    <Button colorScheme='messenger' onClick={onOpen}>New Record</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Record</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <NumberInput defaultValue={15} precision={2}>
                          <NumberInputField />
                        </NumberInput>
                        </FormControl>
                        <RadioGroup defaultValue='2'>
                          <Stack spacing={5} direction='row'>
                            <Radio colorScheme='red' value='0'>
                              Expense
                            </Radio>
                            <Radio colorScheme='green' value='1'>
                              Income
                            </Radio>
                          </Stack>
                        </RadioGroup>

                        <FormControl mt={4}>
                        <FormLabel>Tag</FormLabel>
                        <select id="cars" class="border-4 p-1 rounded-sm">
                          <option value="#food">#food</option>
                          <option value="#entertainment">#entertainment</option>
                          <option value="#travel">#travel</option>
                          <option value="#academics">#academics</option>
                          <option value="#others">#others</option>
                        </select>
                        </FormControl>

                        <FormControl mt={4}>
                        <FormLabel>Date</FormLabel>
                        <Input type="date" placeholder='DD-MM-YYYY' name="date"/>
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