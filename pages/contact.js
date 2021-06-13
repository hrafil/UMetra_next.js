import styles from '../styles/About.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>kontakt</h2>
      <div className={styles.text}>
        <p>
          Chybí nám ve stanici nějaké dílo, které dennodenně míjíte? Máte nápad,
          jak můžeme naše stránky vylepšit? Nebo se vám prostě jen líbí? Dejte
          nám vědět!
        </p>
        <div>
          <p>
            <b>Markéta Hornerová</b>{' '}
            <p className={styles.contact}>
              <Link href="mailto:hornerova.m@gmail.com">
                hornerova.m@gmail.com
              </Link>
            </p>
          </p>
        </div>
        <div>
          <p>
            <b>Nicole Strungová</b>{' '}
            <p className={styles.contact}>
              <Link href="mailto:nicole.strungova@gmail.com">
                nicole.strungova@gmail.com
              </Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
