import { getStationC } from '../lib/stationC';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';

const LineC = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2185), []);
  return (
    <CreateLine
      key={lines.station}
      lines={lines}
      color="circle_red"
      colorEmpty="circle_empty_red"
      letter="c"
    />
  );
};

export const getStaticProps = () => {
  const stationCList = getStationC();
  return {
    props: {
      lines: stationCList,
    },
  };
};

export default LineC;
