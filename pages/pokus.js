import styles from '../styles/About.module.css';

const Pokus = (allStation) => {
  // const lineA = allStation.lines[0].art;
  // const lineB = allStation.lines[1].art;
  // const lineC = allStation.lines[2].art;

  // const stationAFull = lineA.filter((station) => station.artworks);
  // const stationBFull = lineB.filter((station) => station.artworks);
  // const stationCFull = lineC.filter((station) => station.artworks);

  // const justStationA = stationAFull.map((station) => station.station);
  // const justStationB = stationBFull.map((station) => station.station);
  // const justStationC = stationCFull.map((station) => station.station);

  // const stationAB = justStationA.concat(justStationB);
  // const stationABC = stationAB.concat(justStationC);

  // stationABC.sort();

  // stationABC.splice(stationABC.indexOf('Můstek'), 1);
  // stationABC.splice(stationABC.indexOf('Florenc'), 1);
  // stationABC.splice(stationABC.indexOf('Muzeum'), 1);

  // console.log(stationABC);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>tak co?</h2>
      <div className={styles.text}></div>
      {/* <div>{allStation.map((line) => line)}</div> */}
    </div>
  );
};

export default Pokus;
