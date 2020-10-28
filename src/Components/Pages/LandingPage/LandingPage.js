import React from "react";
import styled from "styled-components";

import Header from './Header/Header';
import ScrollIndicator from "./ScrollIndicator/ScrollIndicator";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;


const LandingPage = (props) => {
  return (
    <Wrapper>
      <Header />
      <ScrollIndicator />
    </Wrapper>
  );
};

export default LandingPage;
