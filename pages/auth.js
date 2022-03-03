import FirebaseAuth from "@/components/auth/FirebaseAuth";
import { Box, Link, Button, Flex } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const Auth = () => {
  return (
    <Box
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      bgGradient="linear(to-r, cyan.400, blue.400)"
    >
      <Box w="90%" textAlign="center">
        <FirebaseAuth />
        <Link href="/">
          <Button leftIcon={<FaArrowLeft />} mt="10">
            Буцах
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Auth;
