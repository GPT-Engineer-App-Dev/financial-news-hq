import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Life & Arts</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Box as="main" p={4}>
        <VStack spacing={8} align="stretch">
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="xl">Main Headline</Heading>
            <Text mt={2}>This is the main headline section where the top news story will be displayed.</Text>
          </Box>
          <Flex direction={{ base: "column", md: "row" }} spacing={4}>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" mr={{ md: 4 }}>
              <Heading as="h3" size="lg">Secondary Story</Heading>
              <Text mt={2}>Details about the secondary story go here.</Text>
            </Box>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" ml={{ md: 4 }}>
              <Heading as="h3" size="lg">Another Story</Heading>
              <Text mt={2}>Details about another story go here.</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;