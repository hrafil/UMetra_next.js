import { getStationA } from '../lib/stationA';
import CreateLine from '../components/CreateLine';
// import { useContext } from 'react';
// import UserContext from '../components/UserContext';
import React from 'react';
// import { useEffect } from 'react';

const LineA = ({ lines }) => {
  // useEffect(() => window.scrollTo(0, 2700), []);

  // const { scrollRef } = useContext(UserContext);

  // useEffect(() => {
  //   window.scrollTo(0, scrollRef.current.scrollPos);
  //   const handleScrollPos = () => {
  //     scrollRef.current.scrollPos = window.scrollY;
  //   };

  //   window.addEventListener('scroll', handleScrollPos);

  //   return () => {
  //     window.removeEventListener('scroll', handleScrollPos);
  //   };
  // });

  return (
    <CreateLine
      key={lines.station}
      lines={lines}
      color="circle_green"
      colorEmpty="circle_empty_green"
      letter="a"
    />
  );
};

export const getStaticProps = () => {
  const stationAList = getStationA();
  return {
    props: {
      lines: stationAList,
    },
  };
};

export default LineA;
