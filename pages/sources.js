// import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/About.module.css';
import Link from 'next/link';

const Sources = () => {
  // let { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>zdroje</h2>
      <div className={styles.text}>
        <p>Informace o jednotlivých dílech jsme čerpali primárně z webů</p>
        <li>
          <b>
            <Link href="http://www.metroart.cz/">www.metroart.cz</Link>
          </b>
        </li>
        <li>
          <b>
            <Link href="http://www.vetrelciavolavky.cz/">
              www.vetrelciavolavky.cz
            </Link>
          </b>{' '}
        </li>
        <li>
          <b>
            <Link href="https://umenipromesto.eu/">www.umenipromesto.eu</Link>
          </b>
        </li>
        <p>
          Dalším zdrojem se staly informační popisky umístěné u vybraných děl ve
          stanicích metra.
        </p>
        <p>Fotografie uměleckých děl jsou pořízené autorkami webu.</p>
      </div>
    </div>
  );
};

export default Sources;
