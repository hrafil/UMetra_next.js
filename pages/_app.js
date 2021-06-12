import Layout from '../components/Layout';
import '../styles/globals.css';
// import UserContext from '../components/UserContext';
// import { useRef } from 'react';

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

export default MyApp;
