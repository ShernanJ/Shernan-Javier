import React from "react";
import {
  Wrapper,
  Image,
  TextContainer,
  CodeButton,
  DemoButton,
  Spacing,
  ButtonsWrapper,
  Title,
  Description,
  Tools,
} from "./ProjectStyles";

const Project = (props) => {
  let content = null;
  var img = require(`${props.image}`).default;

  let textContent = (
    <TextContainer>
      <Title>{props.name}</Title>
      <Description>{props.desc}</Description>
      <Tools>{props.tools}</Tools>
      <ButtonsWrapper>
        <DemoButton onClick={() => window.open(`${props.demoLink}`, "_blank")}>
          Demo
        </DemoButton>
        <CodeButton
          type="button"
          value="View Code"
          onClick={() => window.open(`${props.githubLink}`, "_blank")}
        >
          GitHub
        </CodeButton>
      </ButtonsWrapper>
    </TextContainer>
  );

  if (props.index % 2 === 0 || props.index === 0 || window.innerWidth < 769) {
    content = (
      <>
        <Image src={img} alt={props.name} />
        <Spacing />
        {textContent}
      </>
    );
  } else if (window.innerWidth > 769) {
    content = (
      <>
        {textContent}
        <Spacing />
        <Image src={img} alt={props.name} />
      </>
    );
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Project;
