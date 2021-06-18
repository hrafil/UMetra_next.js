import { getAllStation } from '../lib/allStation';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';

const LineC = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2145), []);

  const lineC = lines[2].art;

  return (
    <CreateLine
      key={lineC.station}
      lines={lineC}
      color="circle_red"
      colorEmpty="circle_empty_red"
      letter="c"
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

export default LineC;
