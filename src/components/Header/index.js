import { Flex, HStack } from "@chakra-ui/react";
import Logo from "assets/img/super.svg";
import NavBar from "components/NavBar";
const Header = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      backgroundColor="tomato"
      color="white"
      px="1rem"
      py="1rem"
    >
      <HStack spacing="0.5rem">
        <img src={Logo} width="20px" alt="" />
        <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Super Store</h1>
      </HStack>
      <NavBar />
    </Flex>
  );
};
export default Header;
