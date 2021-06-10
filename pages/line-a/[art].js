import { getStationA } from '../../lib/stationA';
import Link from 'next/link';

export const Artwork = ({ station }) => {
  // const { query } = useRouter();
  // const { t, lang } = useTranslation();

  // console.log({ query });

  return <Artwork station={station} />;
};
// };

export const getStaticProps = ({ params }) => {
  const stationAList = getStationA();
  return {
    props: {
      station: stationAList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationAList = getStationA();
  return {
    paths: stationAList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
