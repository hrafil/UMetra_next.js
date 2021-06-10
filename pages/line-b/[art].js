import { getStationB } from '../../lib/stationB';
import { CreateArt } from '../../components/CreateArt';
import Link from 'next/link';
// import useTranslation from 'next-translate/useTranslation';
// import getT from 'next-translate/getT';
// import { useRouter } from 'next/router';

export const Artwork = ({ station }) => {
  // const { query } = useRouter();
  // const { t, lang } = useTranslation();
  // console.log({ query });
  return <CreateArt station={station} color="circle_art_yellow" letter="b" />;
};

export const getStaticProps = ({ params }) => {
  const stationBList = getStationB();
  return {
    props: {
      station: stationBList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationBList = getStationB();
  return {
    paths: stationBList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
