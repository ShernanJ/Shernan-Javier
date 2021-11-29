import React, { useState } from "react";
import styled from "styled-components";
import SideDrawer from "../SideDrawer/SideDrawer";

const Wrapper = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 8px;
  z-index: 99;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  height: 45%;
  margin: auto 0;
  width: 25px;
  cursor: pointer;
  z-index: 100;
`;

const Bar = styled.div`
  position: relative;
  height: 3px;
  background-color: #1584ce;
  /* transition: 0.6s all; */
  width: 100%;
`;

const DrawerToggle = (props) => {
  const [isDrawerOpened, toggleDrawerOpened] = useState(false);
  const handleClick = () => {
    let midBar = document.getElementById("mid-bar");
    let topBar = document.getElementById("top-bar");
    let botBar = document.getElementById("bot-bar");

    if (isDrawerOpened) {
      midBar.setAttribute(
        "style",
        "transition-duration: 0.22s; transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);"
      );
      topBar.setAttribute(
        "style",
        "top: 0; transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;"
      );
      botBar.setAttribute(
        "style",
        "bottom: 0; transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);"
      );
    } else {
      midBar.setAttribute(
        "style",
        "transform: rotate(-230deg); transition-delay: 0.12s; transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)"
      );
      topBar.setAttribute(
        "style",
        "top: 8px; opacity: 0; transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;"
      );
      botBar.setAttribute(
        "style",
        "bottom: 8px; transform: rotate(230deg); transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);"
      );
    }
    toggleDrawerOpened(!isDrawerOpened);
    console.log("Clicked");
  };
  return (
    <Wrapper scroll={isDrawerOpened}>
      <Menu onClick={() => handleClick()}>
        <Bar id="top-bar" />
        <Bar id="mid-bar" />
        <Bar id="bot-bar" />
      </Menu>
      <SideDrawer
        style={isDrawerOpened ? "translateX(0)" : "translate(100vw)"}
        clicked={() => handleClick()}
      />
    </Wrapper>
  );
};

export default DrawerToggle;
