import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-columns: auto;
`;

export const Wrapper = styled.div`
  padding: 0px 25px 0px 25px;
  display: grid;
  @media (max-width: 960px) {
    padding: 0;
    flex-wrap: wrap;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 920px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
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
  margin: 0px;

  @media (max-width: 920px) {
    font-size: 50px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Text2 = styled.h2`
  color: #c2c2d6;
  margin: 0;
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    padding-top: 10px;
    font-size: 15px;
  }
`;

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

  @media (max-width: 425px) {
    margin-top: 10px;
  }
`;

export const Icon = styled.div`
  font-size: 50px;
  color: #c2c2d6;

  @media (max-width: 425px) {
    font-size: 45px;
  }
`;
