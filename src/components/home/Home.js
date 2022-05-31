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
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

export const Home = () => {
  return (
    <Wrapper>
      <TextContent>
        <Text1>Pedro Perez</Text1>
        <Text2>Frontend Development</Text2>
        <IconsContent>
          <Icon>
            <DiJavascript1 />
          </Icon>
          <Icon>
            <DiReact />
          </Icon>
          <Icon>
            <AiFillHtml5 />
          </Icon>
          <Icon>
            <DiCss3 />
          </Icon>
        </IconsContent>
      </TextContent>
      <ImageContent>
        <Img src={imgFile} />
      </ImageContent>
    </Wrapper>
  );
};
