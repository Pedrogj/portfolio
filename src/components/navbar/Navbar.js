import { Wrapper, IconConten, MenuContent, NavItem, Item } from "./NavbarStyle";
import { BiCodeAlt } from "react-icons/bi";

export const Navbar = () => {
  return (
    <Wrapper>
      <IconConten>
        <BiCodeAlt />
      </IconConten>
      <MenuContent>
        <NavItem>
          <a href="#header">
            <Item>Home</Item>
          </a>
        </NavItem>
        <NavItem>
          <a href="#about">
            <Item>About My</Item>
          </a>
        </NavItem>
        <NavItem>
          <a href="#projects">
            <Item>Projects</Item>
          </a>
        </NavItem>
        <NavItem>
          <a href="#contact">
            <Item>Contact</Item>
          </a>
        </NavItem>
      </MenuContent>
    </Wrapper>
  );
};
