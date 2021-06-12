import { getStationA } from '../lib/stationA';
import CreateLine from '../components/CreateLine';

const LineA = ({ lines }) => {
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
