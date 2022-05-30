import {
  Wrapper,
  TextContent,
  Text1,
  Text2,
  ImageContent,
  Img,
  IconsContent,
  Icon,
} from "./HomeStyle";
import imgFile from "../../assets/perfil.jpg";

export const Home = () => {
  return (
    <Wrapper>
      <TextContent>
        <Text1>Pedro Perez</Text1>
        <Text2>Frontend Development</Text2>
      </TextContent>
      <ImageContent>
        <Img src={imgFile} />
      </ImageContent>
    </Wrapper>
  );
};
