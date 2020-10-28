import React from "react";
import styled from 'styled-components';

import Logo from './Logo';
import { NavItems, Link, Resume} from "./NavigationStyles";

const Wrapper = styled.div`
  display: flex;
  /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5); */
  flex-flow: row;
  padding: 16px 0px;
`;

const Flex = styled.div`
  flex: 50%;
`;

const Navigation = (props) => {
  return (
    <Wrapper>
      <Logo />
      <Flex><NavItems>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
        <Resume>Resume</Resume>
      </NavItems></Flex>
    </Wrapper>
  );
};

export default Navigation;
