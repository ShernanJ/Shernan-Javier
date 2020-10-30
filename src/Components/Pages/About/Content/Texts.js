import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display:block;
  padding-top: 11%;
  flex: 60%;
`;

const Text = styled.p`
  font-size: 1.4rem;
  /* font-size: 24px; */
  color: #444452;
`;

const Title = styled.span`
  font-size: 64px;
  font-weight: 600;
  color: #444452;
`;

const Texts = (props) => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Text style={{marginTop:"64px"}}>
        I’m a passionate{" "}
        <span style={{ color: "#4C9ED4", fontWeight: "bold" }}>
          software development
        </span>{" "}
        student currently in my second year. I’m a design-minded developer that
        focuses on delivering elegant and efficient web applications.
      </Text>
      <Text>
        I’m always willing to learn new and better ways to create seamless user
        experiences with clean, cost-effective, and scalable code.
      </Text>
      <Text>Notable technology I’ve been working with recently:</Text>
    </Wrapper>
  );
};

export default Texts;
