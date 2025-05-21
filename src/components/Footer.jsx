import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTelegramPlane, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import navLinksData from '../data/nav_links.json';

// Converti l'oggetto JSON in array mantenendo l'ordine delle chiavi, escludendo il link home
const navLinks = Object.keys(navLinksData)
  .sort((a, b) => parseInt(a) - parseInt(b))
  .filter(key => navLinksData[key].key !== 'home')
  .map(key => navLinksData[key]);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-oyoya-purple text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Contatti */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-bold text-oyoya-yellow mb-2">{t('footer.contatti')}</h3>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-oyoya-yellow" /> oyoya.info@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaPhone className="text-oyoya-yellow" /> +39 123 456 7890
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaPhone className="text-oyoya-yellow" /> +39 098 765 4321
          </p>
        </div>

        {/* Link Rapidi */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-bold text-oyoya-yellow mb-2">{t('footer.linkRapidi')}</h3>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}>
              <p className="text-oyoya-yellow font-bold hover:text-oyoya-yellow/70 text-sm">{t(`nav.${link.key}`)}</p>
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-bold text-oyoya-yellow mb-2">{t('footer.seguici')}</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/oyoya.music/?utm_source=ig_web_button_share_sheet" ><FaInstagram className="hover:text-oyoya-yellow/70 text-oyoya-yellow" size={22} /></a>
            <a href="https://www.youtube.com/@oyoyamusic" ><FaYoutube className="hover:text-oyoya-yellow/70 text-oyoya-yellow" size={22} /></a>
            <a href="https://t.me/+cyVEBMHRvpg1NWQ0" ><FaTelegramPlane className="hover:text-oyoya-yellow/70 text-oyoya-yellow" size={22} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} Oyoya. {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer; 