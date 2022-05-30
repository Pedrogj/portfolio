import styled from "styled-components";

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

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 10px;
`;

export const Item = styled.div`
  color: #61dafb;
  transition: 0.3s;

  :hover {
    color: white;
  }
`;
