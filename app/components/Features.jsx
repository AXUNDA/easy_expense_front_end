"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcCurrencyExchange,
  FcLock,
} from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack maxW={"300px"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={"6xl"} mb={8}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Lifetime Support"}
            text={
              "For any assistance, our dedicated support team is available 24/7 to help. Reach out through our support portal or email, and we'll swiftly address your queries and concerns."
            }
          />
          <Feature
            icon={<Icon as={FcLock} w={10} h={10} />}
            title={"Privacy"}
            text={
              "Your privacy is our priority. We use top-notch security to keep your data safe and never share it without your consent. Learn more on our Privacy page."
            }
          />
          <Feature
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            title={"Multi-currency support"}
            text={
              "Easy Expense supports multiple currencies, ensuring seamless expense tracking worldwide. Automatically convert and calculate expenses in your preferred currency for accurate financial insights."
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
