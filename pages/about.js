import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>o projektu</h2>
      <p className={styles.text}>
        Projeďte se metrem a prozkoumejte malby, reliéfy, sochy, mozaiky a další
        instalace ve veřejném prostoru. UMetra zahrnuje nejen díla, která
        vznikla při budování stanic, ale také nově nainstalovaná v jejich okolí.
      </p>

      <p>
        Část z děl, která vznikala společně se stanicemi, byla již odstraněna,
        zastavěna stánky či obklopena vizuálním smogem. Cílem tohoto projektu je
        probudit zvědavost a zájem o umění ve veřejném prostoru, aby docházelo k
        jeho obnově a novým instalacím spíše, než k jeho ničení.
      </p>
      <p>
        Umetra vzniklo jako závěrečný projekt Digitální Akademie Web, Czechitas.
      </p>
    </div>
  );
};

export default About;
