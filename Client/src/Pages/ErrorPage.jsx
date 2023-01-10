import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Flex
      h="100vh"
      align="center"
      border="1px red solid"
      justifyContent="center"
      fontFamily="Montserrat"
    >
      <Box textAlign="center" py={10} px={6}>
        <Text
          fontSize="4rem"
          my="5rem"
          fontWeight={800}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Oops !
        </Text>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          We are Sorry, The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
          as={"a"}
          href="/"
        >
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
