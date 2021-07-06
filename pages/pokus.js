import { getAllStation } from '../lib/allStation';

export const Pokus = ({ lines }) => {
  const lineA = lines.filter(
    (station) => station.line === 'A' && station.artworks !== false,
  );

  console.log(lineA);

  // console.log(lineA);

  return <h2>Pokus</h2>;
};

export const getStaticProps = () => {
  const allStation = getAllStation();
  return {
    props: {
      lines: allStation,
    },
  };
};

export default Pokus;
