import { getAllStation } from '../lib/allStation';
import CreateLine from '../components/CreateLine';
import { useEffect } from 'react';
import Swipe from 'react-easy-swipe';

const LineA = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 1900), []);

  const onSwipeRight = (event) => {
    console.log('Start swiping...', event);
    window.scrollTo(0, 1900, event);
  };

  const lineA = lines.filter((station) => station.line === 'A');

  return (
    <Swipe onSwipeRight={onSwipeRight}>
      <CreateLine
        key={lineA.station}
        lines={lineA}
        color="circle_green"
        colorEmpty="circle_empty_green"
        letter="a"
      />
    </Swipe>
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
