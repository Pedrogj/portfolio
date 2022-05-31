import {
  Wrapper,
  SkillContent,
  SkillCard,
  TextContent,
  Description,
  SkillName,
  SkillIcon,
} from "./AboutStyle";
import { skills } from "../../data/skills";

export const About = () => {
  const requireConten = skills.map((item) => (
    <SkillCard key={item.id}>
      <SkillIcon>{item.icon}</SkillIcon>
      <SkillName>{item.name}</SkillName>
    </SkillCard>
  ));

  return (
    <Wrapper id="about">
      <TextContent>
        <Description>
          Poseo habilidades en Javascript. Reactjs, Hooks, Context Api, Redux,
          Nodejs, MongoDB, Firebase, GraphQL, Apollo Client, Express. Tengo 2
          años de experiencia como Desarrollador Web, desarrollador frontend,
          javascript. He realizado diferentes proyectos en los que he tenido la
          oportunidad de avanzar en mis habilidades. Soy una persona autodidacta
          lo cual mi disciplina diaria es estudiar y enfocarme en el reto de
          cada desarrollo.
        </Description>
      </TextContent>
      <SkillContent>{requireConten}</SkillContent>
    </Wrapper>
  );
};
