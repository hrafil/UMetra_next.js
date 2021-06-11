import Layout from '../components/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from '.styles/global';
import { theme } from './theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export function BurgerApp() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <img src="/Layout/hamburger.svg" alt="burger icon" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
