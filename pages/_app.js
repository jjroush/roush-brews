import Header from '../components/header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }

    body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;

const Gutters = styled.div`
  margin: 0 auto;
  padding-left: 17px;
  padding-right: 17px;
  max-width: 1400px;
`;


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <GlobalStyle />
            <Gutters>
                <Component {...pageProps} />
            </Gutters>
        </>
    )
}

export default MyApp