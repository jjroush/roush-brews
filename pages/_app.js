import Header from '../components/header';
import { createGlobalStyle } from 'styled-components';

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


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp