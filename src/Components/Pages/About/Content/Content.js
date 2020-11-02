import React from "react";
import {Image, ImageWrapper, Wrapper} from './ContentStyles';

import Texts from "./Texts";
import mainImage from "../../../../assets/HandsomeMan.png";


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
