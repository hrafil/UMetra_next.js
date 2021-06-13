import React, { useState } from 'react';
// import './Searchfield.css';
import allLines from '../../data/listAll.json';

const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="Searchfield">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {allLines
        .filter((val) => {
          if (searchTerm == '') {
            return val;
          } else if (
            val.station.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div className="station" key={key}>
              <p>{val.station}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Searchbox;
