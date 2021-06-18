import CreateLine from '../components/CreateLine';
import { getAllStation } from '../lib/allStation';
import { useEffect } from 'react';

const LineB = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2700), []);

  const lineB = lines[1].art;

  return (
    <>
      <CreateLine
        key={lineB.station}
        lines={lineB}
        color="circle_yellow"
        colorEmpty="circle_empty_yellow"
        letter="b"
      />
    </>
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
