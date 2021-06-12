import Layout from '../components/Layout';
import '../styles/globals.css';
// import UserContext from '../components/UserContext';
// import { useRef } from 'react';
import Navbar from '../components/Nav/Navbar';

const MyApp = ({ Component, pageProps }) => {
  // const scrollRef = useRef({
  //   scrollPos: 0,
  // });

  return (
    <>
      <Layout>
        {/* <UserContext.Provider value={{ scrollRef: scrollRef }}> */}
        <Component {...pageProps} />
        {/* </UserContext.Provider> */}
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
