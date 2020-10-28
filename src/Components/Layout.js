import React from 'react'
import LandingPage from './Pages/LandingPage/LandingPage';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Navigation from './Navigation/Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width:100%;
`;


const Layout = (props) => {
  return(
    <Wrapper>
      <Navigation />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  )
}

export default Layout;