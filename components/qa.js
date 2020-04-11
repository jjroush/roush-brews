import { useState, useEfffect } from "react";
import { Input, Stack, Box, Heading, Text, Button } from "@chakra-ui/core";

function Qa() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      q: "example question?",
      a: "Example Answer.",
    },
    {
      id: 2,
      q: "example question?",
      a: "Example Answer.",
    },
    {
      id: 3,
      q: "example question?",
      a: "Example Answer.",
    },
  ]);
  return (
    <div>
      <Heading fontSize="xl">{"Q & A"}</Heading>
      <Stack>
        {questions.map((question) => (
          <Box key={question.id} p={5} shadow="sm" borderWidth="1px">
            <Heading fontSize="xl">{question.q}</Heading>
            <Text mt={4}>{question.a}</Text>
          </Box>
        ))}
      </Stack>
      <Input variant="flushed" placeholder="ask away!" size="lg" />
      <Button>Button</Button>
    </div>
  );
}

export default Qa;
