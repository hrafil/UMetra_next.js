import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>o projektu</h2>
      <div className={styles.text_about}>
        <p>
          Projeďte se metrem a prozkoumejte malby, reliéfy, sochy, mozaiky a
          další instalace ve veřejném prostoru. UMetra zahrnuje nejen díla,
          která vznikla při budování stanic, ale také nově nainstalovaná
          v&nbsp;jejich okolí.
        </p>

        <p>
          Část uměleckých děl, která vznikala společně se stanicemi metra, byla
          již odstraněna, zastavěna stánky či je aktuálně obklopena vizuálním
          smogem. Cílem tohoto projektu je probudit zvědavost a&nbsp;zájem
          o&nbsp;umění ve veřejném prostoru, aby docházelo k jeho obnově
          a&nbsp;instalaci nových děl spíše než k jeho ničení.
        </p>
        <p>
          UMetra vzniklo jako závěrečný projekt Digitální Akademie Web,
          Czechitas v roce 2021.
        </p>
      </div>
    </div>
  );
};

export default About;
