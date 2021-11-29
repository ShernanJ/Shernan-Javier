import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Head from "next/head";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Shernan Javier Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout />
    </Wrapper>
  );
}
