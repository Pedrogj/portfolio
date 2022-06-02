import {
  Wrapper,
  Container,
  Row,
  CardContent,
  Item,
  Text1,
  Img,
  Button,
  TextContent,
  ContentButton,
} from "./ProjectsStyle";
import { projects } from "../../data/projects";

export const Projects = () => {
  const requireContent = projects.map((item) => (
    <Item key={item.id}>
      <Img src={item.image} />
      <TextContent>
        <Text1>{item.name}</Text1>
      </TextContent>
      <ContentButton>
        <Button>Detail Project</Button>
      </ContentButton>
    </Item>
  ));

  return (
    <Container id="projects">
      <Wrapper>
        <Row>
          <CardContent>{requireContent}</CardContent>
        </Row>
      </Wrapper>
    </Container>
  );
};
