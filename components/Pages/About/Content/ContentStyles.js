import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 78.6%;
  margin: auto;
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

export const ImageWrapper = styled.div`
  flex: auto;
  margin: auto;
`;

export const Image = styled.img`
  /* display: block;
  height: auto;
  width: 60vw;
  margin: auto;
  @media only screen and (min-width: 769px) {
    width: 90%;
    padding-top: 15%;
    margin: 0 0 auto auto;
  } */
  display: block;
  height: auto;
  margin: auto;
  width: 55vw;
  border-radius: 50%;
  border: 3px lightgray solid;
  @media only screen and (min-width: 769px) {
    width: 17vw;
    margin: 15% 0 auto auto;
    padding: 6px;
  }
`;
