import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 8% auto 0 auto;
  text-align: center;
  bottom: 0px;
`;

const Mouse = styled.div`
  height: 65px;
  width: 40px;
  border: 3px solid #444452;
  border-radius: 25px;
  background-color: none;
  margin: auto;
`;

const ScrollAnimation = keyframes`
  0%{
    margin: 8px 18px 32px 18px;
  }
  50%{
    margin:18px 18px 32px 18px;
  }
  100%{
    margin: 8px 18px 32px 18px;
  }
`;

const MouseScroll = styled.div`
  width: 4px;
  height: 18px;
  border-radius: 25px;
  background-color: #444452;
  margin: 15px 18px 32px 18px;
  animation: ${ScrollAnimation} 2s ease infinite;
`;

const Text = styled.span`
  font-weight: lighter;
  color: #444452;
  font-size: 14px;
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 32px;
  }
`;

const ScrollIndicator = (props) => {
  return (
    <Wrapper>
      <Mouse>
        <MouseScroll />
      </Mouse>
      <Text>scroll down</Text>
    </Wrapper>
  );
};

export default ScrollIndicator;
