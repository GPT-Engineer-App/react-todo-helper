import React from "react";
import { Box, Progress, Text } from "@chakra-ui/react";

const GamifiedCounter = ({ completedTodosCount }) => {
  const progressValue = (completedTodosCount % 10) * 10;

  return (
    <Box mt={4}>
      <Text fontSize="lg">🎉 Daily Goal Progress:</Text>
      <Progress value={progressValue} size="sm" colorScheme="green" />
      <Text mt={2}>{completedTodosCount} / 10 todos completed today!</Text>
    </Box>
  );
};

export default GamifiedCounter;
