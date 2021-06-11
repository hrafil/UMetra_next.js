import Layout from '../components/Layout';
import '../styles/globals.css';
import Navbar from '../components/Nav';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export const AppNav = () => {
  return (
    <div className="App">
      <Navbar />
      App
    </div>
  );
};

export default MyApp;
