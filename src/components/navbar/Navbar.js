import {
  Wrapper,
  IconConten,
  MenuContent,
  NavItem,
  Item,
  MobileIcon,
} from "./NavbarStyle";
import { BiCodeAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  return (
    <Wrapper>
      <IconConten>
        <BiCodeAlt />
      </IconConten>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <MenuContent>
        <NavItem>
          <Item to="home">Home</Item>
        </NavItem>
        <NavItem>
          <Item to="about">About My</Item>
        </NavItem>
        <NavItem>
          <Item to="projects">Projects</Item>
        </NavItem>
        <NavItem>
          <Item to="contact">Contact</Item>
        </NavItem>
      </MenuContent>
    </Wrapper>
  );
};
