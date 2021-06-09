import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/About.module.css';

const About = () => {
  let { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>o projektu</h2>
      <p className={styles.text}>
        Interaktivní mapa metra A, B a C, kde jsou v jednotlivých stanicích
        zaznamenána umělecká díla, která se v nich nachází. Zahrnuje malby,
        reliéfy, sochy, mozaiky a další instalace ve veřejném prostoru.
      </p>
    </div>
  );
};

export default About;
