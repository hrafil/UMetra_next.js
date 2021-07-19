import Link from 'next/link';

const CreateStation = ({ line, color, colorEmpty, letter }) => {
  const transferFromBtoA =
    line.station === 'Můstek' && color === 'circle_yellow';
  const transferFromBtoC =
    line.station === 'Florenc' && color === 'circle_yellow';

  const transferFromAtoB =
    line.station === 'Můstek' && color === 'circle_green';
  const transferFromAtoC =
    line.station === 'Muzeum' && color === 'circle_green';

  const transferFromCtoA = line.station === 'Muzeum' && color === 'circle_red';
  const transferFromCtoB = line.station === 'Florenc' && color === 'circle_red';

  const transferToA = transferFromBtoA || transferFromCtoA;
  const transferToB = transferFromAtoB || transferFromCtoB;
  const transferToC = transferFromBtoC || transferFromAtoC;

  if (!line.artworks) {
    return (
      <div className="station">
        <div className={colorEmpty}></div>
        <p className="lable_empty">{line.station.toUpperCase()}</p>
      </div>
    );
  } else {
    return (
      <>
        <Link
          href={`/linka-${letter}/[art]?art=${line.station}`}
          as={`/linka-${letter}/${line.station}`}
        >
          <div className="station">
            <div className={color}></div>
            <h2 className="label">
              {line.station.toUpperCase()}
              {transferToC ? (
                <Link href="/line-c">
                  <span className="transfer_red"></span>
                </Link>
              ) : transferToA ? (
                <Link href="/line-a">
                  <span className="transfer_green"></span>
                </Link>
              ) : transferToB ? (
                <Link href="/line-b">
                  <span className="transfer_yellow"></span>
                </Link>
              ) : undefined}
            </h2>
          </div>
        </Link>
      </>
    );
  }
};

const CreateLine = ({ lines, color, colorEmpty, letter }) => {
  return (
    <main>
      {lines.map((line) => (
        <CreateStation
          key={line.station}
          line={line}
          color={color}
          colorEmpty={colorEmpty}
          letter={letter}
        />
      ))}
    </main>
  );
};

export default CreateLine;
