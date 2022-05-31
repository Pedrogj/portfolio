import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  position: absolute;
  width: 100%;
  height: 88%;

  @media (max-width: 920px) {
    padding-top: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;

export const Text1 = styled.h1`
  color: #c2c2d6;
  font-size: 65px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 920px) {
    font-size: 50px;
  }
`;

export const Text2 = styled.h2`
  color: #c2c2d6;
  margin: 0;
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 20px;
  }
`;

export const ImageContent = styled.div``;

export const Img = styled.img`
  width: 350px;
  border-radius: 12px;

  @media (max-width: 920px) {
    width: 250px;
  }
`;

export const IconsContent = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const Icon = styled.div`
  font-size: 50px;
  color: #c2c2d6;
`;
