import { Link } from "react-router-dom";
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
          <Link to={"/"}>
            <Item>Home</Item>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"about"}>
            <Item>About My</Item>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"projects"}>
            <Item>Projects</Item>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"contact"}>
            <Item>Contact</Item>
          </Link>
        </NavItem>
      </MenuContent>
    </Wrapper>
  );
};
