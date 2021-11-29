import React from "react";
import {
  CustomImage,
  ImageSection,
  ImageContainer,
  Wrapper,
} from "./ContentStyles";

import Texts from "./Texts";
import mainImage from "../../../../assets/shernan1.jpg";

const Content = (props) => {
  return (
    <Wrapper>
      <Texts />
      <ImageSection>
        <ImageContainer>
          <CustomImage
            alt="Photo of Shernan Javier"
            src={mainImage}
            layout="responsive"
            objectFit="contain"
            priority={true}
          />
        </ImageContainer>
      </ImageSection>
    </Wrapper>
  );
};

export default Content;
