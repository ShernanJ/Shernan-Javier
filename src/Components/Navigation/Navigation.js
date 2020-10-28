import React from "react";
import styled from 'styled-components';

import Logo from './Logo';
import { NavItems, Link, Resume} from "./NavigationStyles";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5); */
  flex-flow: row;
  padding: 16px 0px;
  background-color: white;
  width: 100%;
  top: 0;
`;


const Navigation = (props) => {
  return (
    <Wrapper>
      <Logo />
      <NavItems>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
        <Resume>Resume</Resume>
      </NavItems>
    </Wrapper>
  );
};

export default Navigation;
