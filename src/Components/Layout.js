import React from 'react'
import LandingPage from './LandingPage/LandingPage';
import Navigation from './Navigation/Navigation';

const Layout = (props) => {
  return(
    <React.Fragment>
      <Navigation />
      <LandingPage />
    </React.Fragment>
  )
}

export default Layout;