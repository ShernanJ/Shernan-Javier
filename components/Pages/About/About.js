import React from "react";
import styled from "styled-components";

import Content from "./Content/Content";

const Wrapper = styled.div`
  display: block;
  min-height: 100%;
  width: 100%;
  margin-top: 50%;

  @media only screen and (min-width: 769px) {
    margin-top: 0%;
  }
`;

const About = (props) => {
  return (
    <Wrapper id="about">
      <Content />
    </Wrapper>
  );
};
export default About;
