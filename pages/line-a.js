import { getAllStation } from '../lib/allStation';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';

const LineA = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 1900), []);

  const lineA = lines[0].art;

  return (
    <CreateLine
      key={lineA.station}
      lines={lineA}
      color="circle_green"
      colorEmpty="circle_empty_green"
      letter="a"
    />
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

export default LineA;
