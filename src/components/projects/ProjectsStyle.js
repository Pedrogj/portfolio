import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 70px;
  padding-right: 70px;
  height: 90vh;
  overflow: hidden;

  @media (max-width: 1080px) {
    overflow: visible;
  }

  @media (max-width: 920px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  color: #c2c2d6;
  padding-left: 20px;
  font-size: 50px;
  font-weight: 300;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  justify-content: center;
  padding: 20px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  border: none;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s;
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TextContent = styled.div`
  padding: 10px;
`;

export const Text1 = styled.h2`
  color: #c2c2d6;
  font-size: 20px;
  font-weight: 300;
`;

export const ContentButton = styled.div`
  padding: 10px;
  display: flex;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: solid 1px;
  border-color: #c2c2d6;
  border-radius: 8px;
  color: #c2c2d6;
  display: flex;
  cursor: pointer;
  padding: 10px;
`;
