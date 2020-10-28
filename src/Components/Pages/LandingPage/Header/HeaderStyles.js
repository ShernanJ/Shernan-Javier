import styled from 'styled-components';

export const Wrapper = styled.header`
  margin: 35% auto 40% auto;
  width: 80%;
  @media only screen and (min-width: 768px){
    margin: 5% auto 0 auto;
  width: 56.4%;
  } 
`;

export const Text = styled.span`
  /* font-size: 28px; */
  font-size: 5vw;
  font-weight:300;
  color: #444452;
  
  @media only screen and (min-width: 768px){
    font-size: 1.82vw;
    font-weight:300;
    color: #444452;
  } 
`;

export const MainText = styled(Text)`
  /* font-size: 85px; */
  font-size: 11vw;
  font-weight: bold;
  
  @media only screen and (min-width: 768px){
    font-size: 5vw;
  }
`;
export const SecondText = styled(MainText)`
    font-size: 8.5vw;
    color: #4C9ED4;
    white-space: normal;
    
  @media only screen and (min-width: 768px){
    font-size: 3.26vw;
    white-space: nowrap;
  }
`;