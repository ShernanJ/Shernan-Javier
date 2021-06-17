import React from "react";
import styled from "styled-components";

const SideDrawer = (props) => {
  return (
    <Wrapper style={{ transform: props.style }}>
      <NavItems>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="mailto:shernanjavier@gmail.com">Contact</Link>
        <ResumeBtn
          href="https://drive.google.com/file/d/132N8I2zWpET4zkaAEJ5_gj3k8-yKCGuw/view?usp=sharing"
          target="_blank"
        >
          Resume
        </ResumeBtn>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
  right: 0;
  top: 0;
  transition: all 0.4s;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  height: 30vh;
  margin: 10vh auto auto auto;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 769px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
  }
`;

export const Link = styled.a`
  font-size: 36px;
  font-weight: 350;
  color: #1584ce;
  text-decoration: none;
  height: 50%;
  width: auto;
  padding: 16px 10px;
  transition: color 0.5s ease;
  padding: 0px;
  margin: 16px 16px;
  &:hover,
  &:active {
    color: #072336;
    cursor: pointer;
  }
`;

export const ResumeBtn = styled(Link)`
  color: #fa504c;
  border: thin #fa504c solid;
  border-radius: 8px;
  transition: color 0.5s, background-color 0.5s;
  padding: 6px 16px;
  margin: 10px 16px;
  margin-right: 32px;
  &:hover,
  &:active {
    border-bottom: thin #fa504c solid;
    color: white;
    background-color: #fa504c;
  }
`;

export default SideDrawer;
