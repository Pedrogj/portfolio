import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 70px;
  padding-right: 70px;
  position: absolute;
  width: 100%;
  height: 88%;
  gap: 15px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SkillContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 15px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const SkillIcon = styled.div`
  font-size: 50px;
`;

export const SkillName = styled.h2`
  color: #c2c2d6;
  font-size: 15px;
  font-weight: 500;
`;

export const TextContent = styled.div`
  padding: 20px;
`;

export const Description = styled.p`
  color: #c2c2d6;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 700px) {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;
