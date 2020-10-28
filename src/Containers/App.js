import React from 'react'
import Layout from '../Components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
}

export default App;
