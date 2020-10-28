import styled from "styled-components";

export const NavItems = styled.ul`
  display: flex;
  flex:50%;
  justify-content: flex-end;
  flex-flow: row;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
`;

export const Link = styled.a`
  font-size: 24px;
  font-weight: 350;
  color: #1584CE;
  text-decoration: none;
  height: 50%;
  width: auto;
  padding: 16px 10px;
  transition: color 0.5s ease;
  padding: 0px;
  margin: 16px 16px;
  &:hover,
  &:active {
    color: #072336;
    cursor: pointer;
  }
`;

export const Resume = styled(Link)`
  color: #fa504c;
  border: thin #fa504c solid;
  border-radius: 5px;
  transition: color 0.5s, background-color 0.5s;
  padding: 0px 10px;
  margin-right: 32px;
  &:hover,
  &:active {
    border-bottom: thin #fa504c solid;
    color: white;
    background-color: #fa504c;
  }
`;

export const Logo = styled.div`

`;
