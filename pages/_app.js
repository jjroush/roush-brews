import Head from "next/head";
import Header from "../components/header";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }

    /* body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  } */
`;

const Gutters = styled.div`
  margin: 0 auto;
  padding-left: 17px;
  padding-right: 17px;
  max-width: 1400px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Gutters>
        <Component {...pageProps} />
      </Gutters>
    </ThemeProvider>
  );
}

export default MyApp;
