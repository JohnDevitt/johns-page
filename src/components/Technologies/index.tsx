import React from "react";
import { Row } from "antd";
import {
  Container,
  Image,
  Title,
  StyledCol,
  TechHeader,
} from "./styledComponents";
import reactSVG from "./react.svg";
import typescriptSVG from "./typescript.svg";
import reduxSVG from "./redux.svg";
import apolloSVG from "./apollo.svg";
import nextSVG from "./next.svg";
import kotlinSVG from "./kotlin.svg";
import springSVG from "./spring.svg";
import terraformPNG from "./terraform.png";

const Technologies: React.FC = () => {
  const frontend = [
    {
      title: "React",
      image: reactSVG,
    },
    {
      title: "Typescript",
      image: typescriptSVG,
    },
    {
      title: "Redux",
      image: reduxSVG,
    },
    {
      title: "Apollo Client",
      image: apolloSVG,
    },
    {
      title: "Next.js",
      image: nextSVG,
    },
  ];

  const backend = [
    {
      title: "Kotlin",
      image: kotlinSVG,
    },
    {
      title: "Spring",
      image: springSVG,
    },
  ];

  const infrastructure = [
    {
      title: "Terraform",
      image: terraformPNG,
    },
  ];

  const TechList = ({ techList, title }: any) => (
    <>
      <TechHeader>{title}</TechHeader>
      <Row gutter={[64, 64]} justify="start">
        {techList.map((tech: any) => (
          <StyledCol xs={12} md={8} lg={8} xl={4}>
            <Image src={tech.image} alt={tech.title} />
            <Title>{tech.title}</Title>
          </StyledCol>
        ))}
      </Row>
    </>
  );

  return (
    <Container id="technologies">
      <TechList techList={frontend} title="Frontend" />
      <TechList techList={backend} title="Backend" />
      <TechList techList={infrastructure} title="Infrastructure" />
    </Container>
  );
};

export default Technologies;
