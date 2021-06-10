import { getStationA } from '../lib/stationA';

import CreateLine from '../components/CreateLine';

const LineA = ({ lines }) => {
  return (
    <div>
      <div>Linka A</div>
      <CreateLine key={lines.station} lines={lines} />
    </div>
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
