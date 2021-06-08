import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";
import Modal from "./UI/Modal/Modal";
import Resume from "./Pages/Resume/Resume";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = (props) => {
  const [resumeVisible, toggleResume] = useState(false);
  return (
    <Wrapper>
      <Modal show={resumeVisible} modalClosed={() => toggleResume(false)}>
        <Resume />
      </Modal>
      <Navigation visible={() => toggleResume("block")} />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

export default Layout;
