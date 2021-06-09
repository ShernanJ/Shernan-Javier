import React from "react";
import Project from "./Project/Project";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  min-height: 100%;
  width: 100%;
  background-color: red;
`;

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
      <h1>Projects</h1>
      {projectList}
    </Wrapper>
  );
};
export default Projects;
