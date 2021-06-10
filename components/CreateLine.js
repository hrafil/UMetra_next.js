import Link from 'next/link';
import styles from '../styles/Line.module.css';

const CreateStation = ({ line, color, colorEmpty, letter }) => {
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
          href={`/line-${letter}/[art]?art=${line.station}`}
          as={`/line-${letter}/${line.station}`}
        >
          <div className="station">
            <div className={color}></div>
            <p className="label">{line.station.toUpperCase()}</p>
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
