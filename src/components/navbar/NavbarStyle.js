import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 620px) {
    padding-left: 25px;
    height: 70px;
  }
`;

export const IconConten = styled.div`
  display: flex;
  align-items: center;
  color: #61dafb;
  font-size: 40px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 620px) {
    display: block;
    position: absolute;
    margin-top: -7px;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #61dafb;
  }
`;

export const MenuContent = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 5px;
`;

export const Item = styled(LinkScroll)`
  color: #61dafb;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    color: #c2c2d6;
    transition: 0.2s ease-in-out;
  }
`;
