import React, { useState } from 'react';
import Search from 'react-search';
import lineB from '../../data/listB.json';

const searchField = () => {
  const [station, setStation] = useState();

  const stationsFull = lineB.filter((item) => item.artworks !== false);

  const searchStation = () =>
    stationsFull.find((item) => {
      if (item.station === station) {
        return item.station;
      }
    });
  console.log(searchStation());

  return (
    <>
      <label>
        Hledám...
        <input type="text" onChange={(e) => setStation(e.target.value)} />
      </label>
    </>
  );
};

// export const stationsFull = lineB.filter(
//   (station) => station.artworks !== false,
// );
// console.log(stationsFull);

export const SearchStation = ({ stationsFull }) => {
  return (
    <div>
      {stationsFull.map((station) => (
        <div>{station.station}</div>
      ))}
    </div>
  );
};

export const getStaticProps = () => {
  const stationBList = getStation();
  return {
    props: {
      lines: stationBList,
    },
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
