import Link from 'next/link';

const CreateStation = ({ line }) => {
  if (!line.artworks) {
    return (
      <div className="station">
        <div className="station_circle"></div>
        <p className="label lable_empty">{line.station.toUpperCase()}</p>
      </div>
    );
  } else {
    return (
      <>
        <Link
          href={`/line-b/[art]?art=${line.station}`}
          as={`/line-b/${line.station}`}
        >
          <div className="station">
            <div className="station_circle yellow"></div>
            <p className="label">{line.station.toUpperCase()}</p>
          </div>
        </Link>
      </>
    );
  }
};

const CreateLine = ({ lines }) => {
  return (
    <main>
      {lines.map((line) => (
        <CreateStation key={line.station} line={line} />
      ))}
    </main>
  );
};

export default CreateLine;
