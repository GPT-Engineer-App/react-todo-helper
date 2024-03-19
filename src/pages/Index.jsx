import React from "react";
import { Box, Text } from "@chakra-ui/react";
import GamifiedCounter from "../components/GamifiedCounter";

const Index = ({ currentDate, completedTodosCount }) => {
  return (
    <Box>
      <Box mb={4}>
        <Text fontWeight="bold">{currentDate}</Text>
        <Text>Completed Todos: {completedTodosCount}</Text>
      </Box>
      <GamifiedCounter completedTodosCount={completedTodosCount} />
    </Box>
  );
};

export default Index;
