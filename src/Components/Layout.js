import React from 'react'
import LandingPage from './LandingPage/LandingPage';
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
    </Wrapper>
  )
}

export default Layout;