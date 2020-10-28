import React from 'react'
import {Wrapper, MainText, SecondText, Text } from './HeaderStyles';

const Header = (prop) => {
  return(
    <Wrapper>
      <Text>Hi, my name is</Text><br/>
      <MainText>Shernan Javier.</MainText><br/>
      <SecondText>A Developer with a Designer's Eye, </SecondText><br/>
      <SecondText>A Designer with a Developer's Mind.</SecondText>
    </Wrapper>
  )
}
export default Header;