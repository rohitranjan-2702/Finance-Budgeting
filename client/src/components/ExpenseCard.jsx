import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

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
} from "@chakra-ui/react";
import { addExpense } from "../utils/dbHelpers";

const ExpenseCard = ({ triggerFetch }) => {
  const [title, setTitle] = useState("expense");
  const [amount, setAmount] = useState(15.0);
  const [type, setType] = useState("expense");
  const [tags, setTags] = useState("food");
  const [date, setDate] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onSubmit = () => {
    const year = date.slice(0, 4);
    const month = parseInt(date.slice(5, 7));
    addExpense(title, year, month - 1, date, amount, type, tags).then(
      ([error, result]) => {
        if (error) {
          console.log("ERROR: " + error);
        }
        console.log("Expense added");
        triggerFetch();
      }
    );
    onClose();
    // navigate(0);
  };
  return (
    <>
      <Button colorScheme="messenger" onClick={onOpen}>
        New Record
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Record</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder={"Expense"}
                onChange={(e) => setTitle(e.currentTarget.value)}
                name="title"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <NumberInput
                defaultValue={15}
                precision={2}
                onChange={(e) => {
                  setAmount(e);
                }}
                name="amount"
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <RadioGroup
              defaultValue="expense"
              onChange={(e) => {
                setType(e);
              }}
              name="expense"
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="expense">
                  Expense
                </Radio>
                <Radio colorScheme="green" value="income">
                  Income
                </Radio>
              </Stack>
            </RadioGroup>

            <FormControl mt={4}>
              <FormLabel>Tag</FormLabel>
              <select
                id="tags"
                className="border-4 p-1 rounded-sm"
                name="tags"
                onChange={(e) => {
                  setTags(e.currentTarget.value);
                }}
              >
                <option value="food">#food</option>
                <option value="entertainment">#entertainment</option>
                <option value="travel">#travel</option>
                <option value="academics">#academics</option>
                <option value="others">#others</option>
              </select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                placeholder="DD-MM-YYYY"
                name="date"
                onChange={(e) => {
                  setDate(e.currentTarget.value);
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpenseCard;
