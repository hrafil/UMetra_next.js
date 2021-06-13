import CreateLine from '../components/CreateLine';
import { getStationB } from '../lib/stationB';
import { useEffect } from 'react';

const LineB = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2700), []);

  return (
    <>
      <CreateLine
        key={lines.station}
        lines={lines}
        color="circle_yellow"
        colorEmpty="circle_empty_yellow"
        letter="b"
      />
    </>
  );
};

export const getStaticProps = () => {
  const stationBList = getStationB();
  return {
    props: {
      lines: stationBList,
    },
  };
};

export default LineB;
