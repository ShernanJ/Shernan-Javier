import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 50%;
  margin: auto auto auto 16px;
  margin-left: 16px;
`;

const Image = styled.svg`
  height: 50px;
  transition: fill 0.3s;
  cursor: pointer;
  @media only screen and (min-width: 769px){
    height: 60px;
    
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: 60px; 
  }
`;

const StyledPath = styled.path`
  transition: fill 0.4s ease;
  stroke-width: 4;
`;


const Logo = (props) => {
  
  const [fillColours, setColour] = useState(["white", "#1584CE"]);

  return ( 
    <Wrapper>
        <Image onClick={() => window.scrollTo(0,0)}
          width="60"
          height="66"
          viewBox="0 0 60 66"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={()=> setColour(["#10345F","#4df0ff"])}
          onMouseLeave={()=> setColour(["white", "#1584CE"])}
        >
          <StyledPath
            d="M30 3L55.9808 18V48L30 63L4.01924 48V18L30 3Z"
            fill={fillColours[0]}
            stroke="#10345F"
          />
          <StyledPath
            d="M31.3369 37.0527C31.3369 38.9863 30.6387 40.5098 29.2422 41.623C27.8555 42.7363 25.9219 43.293 23.4414 43.293C21.1562 43.293 19.1348 42.8633 17.377 42.0039V37.7852C18.8223 38.4297 20.043 38.8838 21.0391 39.1475C22.0449 39.4111 22.9629 39.543 23.793 39.543C24.7891 39.543 25.5508 39.3525 26.0781 38.9717C26.6152 38.5908 26.8838 38.0244 26.8838 37.2725C26.8838 36.8525 26.7666 36.4814 26.5322 36.1592C26.2979 35.8271 25.9512 35.5098 25.4922 35.207C25.043 34.9043 24.1201 34.4209 22.7236 33.7568C21.415 33.1416 20.4336 32.5508 19.7793 31.9844C19.125 31.418 18.6025 30.7588 18.2119 30.0068C17.8213 29.2549 17.626 28.376 17.626 27.3701C17.626 25.4756 18.2656 23.9863 19.5449 22.9023C20.834 21.8184 22.6113 21.2764 24.877 21.2764C25.9902 21.2764 27.0498 21.4082 28.0557 21.6719C29.0713 21.9355 30.1309 22.3066 31.2344 22.7852L29.7695 26.3154C28.627 25.8467 27.6797 25.5195 26.9277 25.334C26.1855 25.1484 25.4531 25.0557 24.7305 25.0557C23.8711 25.0557 23.2119 25.2559 22.7529 25.6562C22.2939 26.0566 22.0645 26.5791 22.0645 27.2236C22.0645 27.624 22.1572 27.9756 22.3428 28.2783C22.5283 28.5713 22.8213 28.8594 23.2217 29.1426C23.6318 29.416 24.5938 29.9141 26.1074 30.6367C28.1094 31.5938 29.4814 32.5557 30.2236 33.5225C30.9658 34.4795 31.3369 35.6562 31.3369 37.0527ZM32.9775 49.2988C31.9521 49.2988 31.0586 49.1914 30.2969 48.9766V45.1973C31.0781 45.3926 31.791 45.4902 32.4355 45.4902C33.4316 45.4902 34.1445 45.1777 34.5742 44.5527C35.0039 43.9375 35.2188 42.9707 35.2188 41.6523V21.584H39.7598V41.623C39.7598 44.123 39.1885 46.0273 38.0459 47.3359C36.9033 48.6445 35.2139 49.2988 32.9775 49.2988Z"
            fill={fillColours[1]}
          />
        </Image>
    </Wrapper>
  );
};

export default Logo;
