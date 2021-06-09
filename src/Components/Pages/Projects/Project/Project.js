import React from "react";
import {
  Wrapper,
  Image,
  TextContainer,
  CodeButton,
  DemoButton,
} from "./ProjectStyles";

const Project = (props) => {
  let content = null;
  var img = require(`${props.image}`).default;

  let textContent = (
    <TextContainer>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <p>{props.tools}</p>
      <DemoButton onClick={() => window.open(`${props.demoLink}`, "_blank")}>
        Demo
      </DemoButton>
      <CodeButton
        type="button"
        value="View Code"
        onClick={() => window.open(`${props.githubLink}`, "_blank")}
      >
        View Code
      </CodeButton>
    </TextContainer>
  );

  if (props.index % 2 === 0 || props.index === 0) {
    content = (
      <>
        <Image src={img} alt={props.name} /> {textContent}
      </>
    );
  } else {
    content = (
      <>
        {textContent}
        <Image src={img} alt={props.name} />
      </>
    );
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Project;
