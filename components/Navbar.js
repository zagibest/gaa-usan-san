import { Box, Button, Text } from "@chakra-ui/react";
import { useUser } from "@/lib/firebase/useUser";

export default function Navbar() {
  const { user, logout } = useUser();
  return (
    <Box
      w="100%"
      h="10vh"
      bgGradient="linear(to-r, cyan.400, blue.400)"
      s="sm"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="15"
    >
      <Text color="white" fontWeight="extrabold" ml="10">
        Бүртгэлийн систем
      </Text>
      <Button
        onClick={() => logout()}
        mr="10"
        bg="transparent"
        color="whiteAlpha.900"
        _hover={{
          bgGradient: "linear(to-r, teal.500, green.500)",
          fontWeight: "bold",
        }}
      >
        Гарах
      </Button>
    </Box>
  );
}
