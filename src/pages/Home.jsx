import UpcomingEvents from '../components/UpcomingEvents';
import Links from '../components/Links';
import { Helmet } from 'react-helmet';


/**
 * Home page component, it contains the social media links
 */
const Home = () => {

  return (
    <>
      <Helmet>
        <title>Oyoya Music - Eventi e arte audiovisiva</title>
      </Helmet>
    <div className="min-h-[750px] bg-white flex flex-col items-center justify-center gap-12 pt-12 pb-32 px-4" style={{ backgroundImage: `url('/assets/contact-sx.JPG')` }}>
      <div>
        <UpcomingEvents />
      </div>
      <Links />
    </div>
    </>
  );
};

export default Home; 