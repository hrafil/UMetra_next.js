import { getStationA } from '../lib/stationA';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';

const LineA = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 1570), []);

  return (
    <main>
      <CreateLine
        key={lines.station}
        lines={lines}
        color="circle_green"
        colorEmpty="circle_empty_green"
        letter="a"
      />
    </main>
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
