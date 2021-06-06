import React, { useState } from 'react';
import Search from 'react-search';
import lineB from '../../data/listB.json';

const searchField = () => {
  const [searchInput, setInput] = useState();

  const stationsFull = lineB.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });
  console.log(artworksIn);

  const searchStation = () =>
    stationsFull.find((item) => {
      if (item.station === searchInput) {
        return item.station;
      }
    });
  // console.log(searchStation());

  const searchName = () =>
    stationsFull.find((station) => {
      if (station.name === searchInput) {
        return station.name;
      }
    });
  // console.log(searchName());

  const searchType = () =>
    stationsFull.find((station) => {
      if (station.type === searchInput) {
        return station.type;
      }
    });
  // console.log(searchType());

  return (
    <>
      <label>
        Hledám...
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </label>
    </>
  );
};

export const SearchStation = ({ stationsFull }) => {
  return (
    <div>
      {stationsFull.map((station) => (
        <div>{station.station}</div>
      ))}
    </div>
  );
};

// export const getStaticProps = () => {
//   const stationBList = getStation();
//   return {
//     props: {
//       lines: stationBList,
//     },
//   };
// };

export const getStaticProps = ({ params }) => {
  const stationBList = getStation();
  return {
    props: {
      station: stationBList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationBList = getStation();
  return {
    paths: stationBList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

// const Searchbox = () => {
//   return (
//     <div>
//       <Search items={items} />

//       <Search
//         items={items}
//         // placeholder="Pick your language"
//         maxSelected={3}
//         multiple={true}
//         onItemsChanged={HiItems}
//       />
//     </div>
//   );
// };

export default searchField;
// export default stationsFull;
