import React from "react";
import styled from "styled-components";

import Texts from "./Texts";
import mainImage from "../../../../assets/HandsomeMan.png";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 78.6%;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  flex: auto;
  padding-top: 22%;
`;

const Image = styled.img`
  display: block;
  height: auto;
  width: 350px;
  margin: auto;
`;

const Content = (props) => {
  return (
    <Wrapper>
      <Texts />
      <ImageWrapper>
        <Image src={mainImage} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Content;
