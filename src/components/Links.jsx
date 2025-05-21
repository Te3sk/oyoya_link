import { useState } from 'react';
import { FaInstagram, FaYoutube, FaTelegramPlane, FaSpotify } from 'react-icons/fa';
import WorkInProgress from '../components/WorkInProgress';
import { useTranslation } from 'react-i18next';

/**
 * Social media links, list of objects with name, url, color and icon
 */
const socialsKeys = [
    { key: 'instagram', url: 'https://www.instagram.com/oyoya.music/?utm_source=ig_web_button_share_sheet', icon: <FaInstagram size={40} className="text-white" /> },
    { key: 'youtube', url: 'https://www.youtube.com/@oyoyamusic', icon: <FaYoutube size={40} className="text-white" /> },
    { key: 'telegram', url: 'https://t.me/+cyVEBMHRvpg1NWQ0', icon: <FaTelegramPlane size={40} className="text-white" /> },
    { key: 'spotify', url: '', icon: <FaSpotify size={40} className="text-white" /> },
    // { key: 'whatsapp', url: '', icon: <FaWhatsapp size={40} className="text-white" /> },
];

const Links = ({ size = "big" }) => {
    const [showWip, setShowWip] = useState(false);
    const { t } = useTranslation();

    const handleSocialClick = (url, e) => {
        if (!url) {
            e.preventDefault();
            setShowWip(true);
            setTimeout(() => setShowWip(false), 4000);
        }
    };

    // Classi dinamiche per la griglia e i blocchi
    const gridClass = size === "small"
    ? "grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
    : "grid grid-cols-1 md:grid-cols-2 gap-8 w-[750px]";

    const blockClass = size === "small"
        ? "flex flex-col items-center gap-2 justify-center rounded-xl shadow p-3 text-base font-semibold bg-oyoya-purple/75"
        : "flex flex-row items-center gap-4 justify-center rounded-xl shadow-lg p-8 text-xl font-semibold hover:scale-105 transition-transform bg-oyoya-purple/75";

    const iconSize = size === "small" ? 28 : 40;

    return (
        <div>
            <h1 className="text-3xl sm:text-2xl text-center font-bold mb-10 text-oyoya-purple">{t('home.title')}</h1>
            <div className={gridClass}>
                {socialsKeys.map((social) => (
                    <a
                        key={social.key}
                        href={social.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => handleSocialClick(social.url, e)}
                        className={blockClass}
                    >
                        {/* Ridimensiona l'icona in base alla prop */}
                        {size === "small"
                            ? <span className="text-white">{social.icon.type({ size: iconSize, className: "text-white" })}</span>
                            : social.icon
                        }
                        <span className="text-white">{t(`home.${social.key}`)}</span>
                    </a>
                ))}
            </div>
            {/* Popup Work In Progress */}
            {showWip && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-xl p-0 flex items-center justify-center">
                    <WorkInProgress small />
                </div>
            )}
        </div>
    );
}

export default Links;
