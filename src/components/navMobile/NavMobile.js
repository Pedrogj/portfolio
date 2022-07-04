import {
  NavContainer,
  CloseIcon,
  Icon,
  NavMenu,
  NavMobileLink,
  NavWrapper,
} from "./NavMobileStyle";

export const NavMobile = ({ toggle, isOpen }) => {
  return (
    <NavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <NavWrapper>
        <NavMenu>
          <NavMobileLink to="home" onClick={toggle}>
            Home
          </NavMobileLink>
          <NavMobileLink to="about" onClick={toggle}>
            About My
          </NavMobileLink>
          <NavMobileLink to="projects" onClick={toggle}>
            Projects
          </NavMobileLink>
          <NavMobileLink to="contact" onClick={toggle}>
            Contact
          </NavMobileLink>
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
};
