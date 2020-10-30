import React from 'react'
import styled from 'styled-components';

import Content from './Content/Content';

const Wrapper = styled.div`
  display: block;
  height:100%;
  width: 100%;
`;

const About = (props) => {
  return(
    <Wrapper id="about">
      <Content />
    </Wrapper>
  )
}
export default About;