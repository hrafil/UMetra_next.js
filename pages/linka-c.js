import { getAllStation } from '../lib/allStation';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';

const LineC = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 1995), []);

  const lineC = lines.filter((station) => station.line === 'C');

  return (
    <div className="container_line">
      <CreateLine
        key={lineC.station}
        lines={lineC}
        color="circle_red"
        colorEmpty="circle_empty_red"
        letter="c"
      />
    </div>
  );
};

export const getStaticProps = () => {
  const allStation = getAllStation();
  return {
    props: {
      lines: allStation,
    },
  };
};

export default LineC;
