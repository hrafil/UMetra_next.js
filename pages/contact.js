import styles from '../styles/About.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>kontakt</h2>
      <div className={styles.text}>
        <p>
          Chybí nám ve stanici nějaké dílo, které dennodenně potkáváte? Máte
          nápad, jak můžeme naše stránky vylepšit? Nebo se vám prostě jen líbí?
          Dejte nám vědět!
        </p>
        <div className={styles.contact}>
          <p>
            <b>Markéta Hornerová</b>
          </p>
          <p>
            <Link href="mailto:hornerova.m@gmail.com">
              hornerova.m@gmail.com
            </Link>
          </p>
        </div>
        <div className={styles.contact}>
          <p>
            <b>Nicole Strungová</b>
          </p>
          <p>
            <Link href="mailto:nicole.strungova@gmail.com">
              nicole.strungova@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
