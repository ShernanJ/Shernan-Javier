import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  width: 78.6%;
  margin: auto;
  margin-bottom: 20vh;
  padding-top: 28%;
  flex-direction: column;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    padding-top: 10%;
  }

  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    flex-direction: column;
    padding-top: 15%;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex: auto;
  margin: auto;
  height: auto;
  width: 55vw;
  @media only screen and (min-width: 769px) {
    width: 17vw;
    margin: auto 0 auto 5%;
    padding: 6px;
  }
`;

export const CustomImage = styled(Image)`
  object-fit: contain;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  flex: auto;
  justify-content: center;
  border: 3px lightgray solid;
  border-radius: 50%;
  width: 100%;
  padding: 2%;
  margin: auto;
`;
