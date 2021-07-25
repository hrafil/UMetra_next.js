import CreateLine from '../components/CreateLine';
import { getAllStation } from '../lib/allStation';
import { useEffect } from 'react';

const LineB = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2640), []);

  const lineB = lines.filter((station) => station.line === 'B');

  return (
    <div className="container_line">
      <CreateLine
        key={lineB.station}
        lines={lineB}
        color="circle_yellow"
        colorEmpty="circle_empty_yellow"
        letter="b"
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

export default LineB;
