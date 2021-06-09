import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 78.6%;
  margin: auto;
  background-color: blue;
  flex-direction: row;
  padding-bottom: 5%;
`;

export const Image = styled.img`
  flex: 0 0 52.083%;
  width: 47.917%;
  height: auto;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  background-color: pink;
`;

export const DemoButton = styled.button`
  font-weight: 600;
  height: 10.78%;
  width: 17.625%;
  color: white;
  background: #0163f7;
  box-shadow: 0px 1.75305px 2.3374px rgba(0, 0, 0, 0.25);
  border-radius: 2.03774px;
  border: none;
`;

export const CodeButton = styled(DemoButton)`
  background: #444452;
`;
