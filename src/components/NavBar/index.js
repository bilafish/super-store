import { HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import navItems from "./navItems.json";
const activeLinkStyle = {
  fontWeight: "bold",
};

const NavBar = () => {
  return (
    <HStack spacing="24px">
      {navItems.map((item) => (
        <NavLink key={item.id} to={item.path} activeStyle={activeLinkStyle}>
          {item.name}
        </NavLink>
      ))}
    </HStack>
  );
};
export default NavBar;
