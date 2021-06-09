import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

import Logo from "./Logo";
import { NavItems, Link, ResumeBtn } from "./NavigationStyles";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5); */
  flex-flow: row;
  padding: 16px 2.5%;
  background-color: white;
  width: 95%;
  top: 0;
  z-index: 1;
  transition: transform 0.4s;
  @media only screen and (min-width: 769px) {
    padding: 16px 0;
    width: 100%;
  }
`;

const Navigation = (props) => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Wrapper
      style={{ transform: visible ? "translateY(0)" : "translateY(-15vh)" }}
    >
      <Logo />
      <DrawerToggle />
      <NavItems>
        <Link href="#about">About</Link>
        <Link href="/">Projects</Link>
        <Link href="mailto:shernanjavier@gmail.com">Contact</Link>
        <ResumeBtn onClick={props.visible}>Resume</ResumeBtn>
      </NavItems>
    </Wrapper>
  );
};

export default Navigation;
