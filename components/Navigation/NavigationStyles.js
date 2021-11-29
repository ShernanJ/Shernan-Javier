import styled from "styled-components";

export const NavItems = styled.ul`
  display: none;
  flex: 50%;
  justify-content: flex-end;
  flex-flow: row;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  @media only screen and (min-width: 769px) {
    display: flex;
  }
  @media only screen and (min-width: 768px) and (max-height: 1367px) and (-webkit-min-device-pixel-ratio: 1.5) {
  }
`;

export const Link = styled.a`
  font-size: 24px;
  font-weight: 350;
  color: #1584ce;
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

export const ResumeBtn = styled(Link)`
  color: #fa504c;
  border: thin #fa504c solid;
  border-radius: 8px;
  transition: color 0.5s, background-color 0.5s;
  padding: 6px 16px;
  margin: 10px 16px;
  margin-right: 32px;
  &:hover,
  &:active {
    border-bottom: thin #fa504c solid;
    color: white;
    background-color: #fa504c;
  }
`;

export const Logo = styled.div``;
