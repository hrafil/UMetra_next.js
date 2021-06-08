import useTranslation from 'next-translate/useTranslation';

const About = () => {
  let { t } = useTranslation();
  return (
    <div>
      <h2>{t('about:title')}</h2>
      <p>{t('about:introduction')}</p>
    </div>
  );
};

export default About;
