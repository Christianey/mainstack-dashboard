import {
  Box,
  ChakraProvider,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Dashboard from "./pages/Dashboard";
import Fonts from "./components/Fonts";
import MobileDrawer from "./components/MobileDrawer";
import SidebarContent from "./components/SidebarContent";
import theme from "./theme";

function App() {
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fe-task-api.mainstack.io/");
      const result = await response.json();
      setData(result);
    }

    getData();
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Flex>
        <Flex
          flexBasis={["0", "0", "20%", "20%"]}
          width={["0", "0", "20%", "20%"]}
          display={["none", "none", "block", "block"]}
          position={["absolute", "absolute", "fixed", "fixed"]}
          bg="white"
          borderRight={"1px solid #EFF1F6"}
        >
          <SidebarContent />
          <MobileDrawer onClose={onClose} isOpen={isOpen} />
        </Flex>

        <Flex
          flexBasis={["100%", "100%", "80%", "80%"]}
          width={["100%", "100%", "80%", "80%"]}
          pl={[1, 1, "20%", "20%"]}
          direction="column"
          minH={"100vh"}
          grow={1}
        >
          <Box
            pl={[1, 1, 3, 8]}
            py={2}
            display="flex"
            alignItems={"center"}
            pos="sticky"
            top="0"
            bg={"white"}
            boxShadow="sm"
          >
            <IconButton
              display={["block", "block", "none", "none"]}
              size={"md"}
              icon={<MdMenu style={{ margin: "0 auto" }} />}
              onClick={onOpen}
              bg="transparent"
              _focusWithin={{ bg: "transparent" }}
              _focusVisible={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _hover={{ bg: "transparent" }}
            />
            <Text variant="h1" fontWeight={"bolder"} fontSize="20px">
              Dashboard
            </Text>
          </Box>

          <Dashboard data={data} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
