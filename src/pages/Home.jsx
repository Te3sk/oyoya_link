// React imports
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Components imports
import UpcomingEvents from '../components/UpcomingEvents';
import Links from '../components/Links';

// Styles imports
// import '../styles/home.css';

/**
 * Home page component, it contains the social media links
 */
const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <Helmet>
        <title>Oyoya Music - Eventi e arte audiovisiva</title>
      </Helmet>
      <div className="min-h-[750px] space-y-12">
        {/* Hero Section */}
        <div className='w-full h-[400px] md:h-[450px] space-y-7 md:space-y-14 p-8 bg-cover bg-center flex flex-col items-center justify-center' style={{ backgroundImage: `url('/assets/home-hero.gif')` }}>
          <h1 className="hidden">{t('home.heroTitle1')}<br />{t('home.heroTitle2')}</h1>
          <p className="text-[35px] md:text-7xl text-center font-bold text-white text-shadow-lg text-shadow-oyoya-purple/75">{t('home.heroTitle1')}<br />{t('home.heroTitle2')}</p>
          <p className="text-lg md:text-xl text-center font-bold text-white text-shadow-md text-shadow-oyoya-purple/75">{t('home.heroSubtitle')}</p>
        </div>

        <div className='w-full flex flex-col items-center justify-start gap-12 px-4 pb-32'>
          <UpcomingEvents />
          <Links />
        </div>
      </div>
    </>
  );
};

export default Home; 