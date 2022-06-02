import { Wrapper, Content, Row, Text } from "./FooterStyle";

export const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <Wrapper>
      <Row>
        <Content>
          <Text>Created By Pedro Perez, {currentYear}</Text>
        </Content>
      </Row>
    </Wrapper>
  );
};
