import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  flex: 70%;
  @media only screen and (min-width: 769px) {
  }
`;

const Text = styled.p`
  font-size: 5vw;
  /* font-size: 24px; */
  color: #444452;
  @media only screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: #444452;
  @media only screen and (min-width: 769px) {
    font-size: 3rem;
  }
`;

const Texts = (props) => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Text>
       I am a fourth year Software Engineer student at Sheridan College!
      </Text>
      <Text>
        I am currently looking for Winter and Summer 2024 internships before finishing school in Fall 2024!
      </Text>
      <Text>
        Besides programming, I love rock climbing, skiing, and cars!
      </Text>
    </Wrapper>
  );
};

export default Texts;
