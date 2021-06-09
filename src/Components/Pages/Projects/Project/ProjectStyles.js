import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 78.6%;
  margin: auto;
  flex-direction: row;
  padding-bottom: 8%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #444452;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444452;
`;

export const Tools = styled(Description)`
  font-weight: 500;
  color: #4c9ed4;
`;

export const Image = styled.img`
  flex: 0 0 52.083%;
  width: 47.917%;
  height: auto;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`;

export const DemoButton = styled.button`
  font-weight: 600;
  width: 17.625%;
  height: 38px;
  flex: 1;
  color: white;
  background: #0163f7;
  box-shadow: 0px 1.75305px 2.3374px rgba(0, 0, 0, 0.25);
  border-radius: 2.03774px;
  border: none;
  margin-right: 5%;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background: #094cb3;
  }
`;

export const CodeButton = styled(DemoButton)`
  background: #444452;

  &:hover {
    background: #2a2a33;
  }
`;

export const Spacing = styled.div`
  flex: 0 0 6%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  height: 10.78%;
  width: 50%;
`;
