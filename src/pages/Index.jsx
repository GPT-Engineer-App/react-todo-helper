import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack, Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <Flex>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <Stack mt={8} spacing={4}>
        {todos.map((todo, index) => (
          <Flex key={index} alignItems="center">
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} mr={4} />
            <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
              {todo.text}
            </Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" size="sm" />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
