import React from "react";
import Project from "./Project/Project";
import styled from "styled-components";

const Projects = (props) => {
  // Insert project name here, place preview in images folder with same project name.
  const projects = require("./projects.json");

  const projectList = projects.map((project, i) => (
    <Project
      key={i}
      index={i}
      name={project.name}
      desc={project.desc}
      tools={project.tools}
      demoLink={project.demo_link}
      githubLink={project.github_link}
      image={project.image}
    />
  ));

  return (
    <Wrapper>
      <Title>Projects</Title>
      {projectList}
    </Wrapper>
  );
};
export default Projects;

const Wrapper = styled.div`
  display: block;
  min-height: 100%;
  width: 100%;

  margin-top: 30%;

  @media only screen and (min-width: 769px) {
    margin-top: 0%;
  }
`;

const Title = styled.h1`
  margin-left: 10.5%;
  font-size: 3rem;
  font-weight: 600;
  color: #444452;
`;
