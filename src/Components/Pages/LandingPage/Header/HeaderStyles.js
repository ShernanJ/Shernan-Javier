import styled from "styled-components";

export const Wrapper = styled.header`
  margin: auto;
  padding: 20vh 0 8vh 0;
  width: 80%;
  @media only screen and (min-width: 769px) {
    /* margin: 6.5% auto 0 auto; */
    margin: auto;
    padding: 10% 0 3.5% 0;
    width: 56.4%;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin: 20% auto;
    width: 90%;
  }
`;

export const Text = styled.span`
  /* font-size: 28px; */
  font-size: 5vw;
  font-weight: 300;
  color: #444452;

  @media only screen and (min-width: 769px) {
    font-size: 1.82vw;
    font-weight: 300;
    color: #444452;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 6vw;
  }
`;

export const MainText = styled(Text)`
  /* font-size: 85px; */
  font-size: 11vw;
  font-weight: bold;

  @media only screen and (min-width: 769px) {
    font-size: 5vw;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 12vw;
  }
`;
export const SecondText = styled(MainText)`
  font-size: 8.5vw;
  color: #4c9ed4;
  white-space: normal;

  @media only screen and (min-width: 769px) {
    font-size: 3.26vw;
    white-space: nowrap;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
   font-size: 5.2vw; 
   white-space: normal;
  }
`;
