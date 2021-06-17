import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";
import Modal from "./UI/Modal/Modal";
import ResumePDF from "../assets/Shernan-Javier-Resume.pdf";

const Layout = (props) => {
  const [resumeVisible, toggleResume] = useState(false);

  var resume = require("../assets/Resume.png").default;

  return (
    <Wrapper>
      <Modal show={resumeVisible} modalClosed={() => toggleResume(false)}>
        <Resume
          src={resume}
          style={{ display: resumeVisible ? "block" : "none" }}
        />
        <div>
          <Button href={ResumePDF} download="Shernan-Javier-Resume.pdf">
            Download
          </Button>
          <Exit onClick={() => toggleResume(false)}>Exit</Exit>
        </div>
      </Modal>
      <Navigation visible={() => toggleResume("block")} />
      <LandingPage />
      <About />
      <Projects />
    </Wrapper>
  );
};
export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Resume = styled.img`
  height: auto;
  margin: 10vh auto 20px 10vw;
  width: 50vw;

  @media only screen and (min-width: 769px) {
    height: 90vh;
    margin: 0 0 20px 0;
    width: auto;
  }
`;

const Button = styled.a`
  font-weight: 600;
  padding: 8px 15px;
  color: white;
  background: #0163f7;
  box-shadow: 0px 1.75305px 2.3374px rgba(0, 0, 0, 0.25);
  border-radius: 2.03774px;
  border: none;
  margin-right: 2%;
  margin-left: 10vw;
  transition: all 0.4s;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: #094cb3;
  }

  @media only screen and (min-width: 769px) {
    margin-left: 0;
  }
`;

const Exit = styled(Button)`
  background: #ff5757;
  padding: 8px 20px;
  margin-left: 0;

  &:hover {
    background: #c95151;
  }
`;
