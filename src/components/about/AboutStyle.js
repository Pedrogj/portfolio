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
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 70px;
  padding-right: 70px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    padding-top: 50px;
    padding-bottom: 50px;
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

export const Title = styled.h2`
  color: #c2c2d6;
  padding-bottom: 20px;
  font-size: 50px;
  font-weight: 300;
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
