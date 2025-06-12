// React imports
import { useTranslation } from 'react-i18next';

// Icons imports
import { FaArrowDown } from 'react-icons/fa';

// Data imports
import radios from '../data/radios.json';

const Radios = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // Converto le radio in array e le ordino per data decrescente
    const radiosArray = Object.entries(radios)
        .map(([id, details]) => ({ id, ...details }))
        .sort((a, b) => new Date(b.data) - new Date(a.data));

    const renderRadio = (radio) => {
        if (radio.id === '0000') { // Template Radio
            return null;
        }

        return (
            <div
                key={radio.id}
                className="bg-oyoya-purple/10 rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80 cursor-pointer hover:bg-oyoya-purple/20 transition-colors"
                onClick={() => window.open(radio.link, '_blank')}
            >
                <img
                    src={`/assets/radios/${radio.img}`}
                    alt={radio.title}
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                    onError={e => { e.target.onerror = null; e.target.src = '/assets/oyoya_logo.jpg'; }}
                />
                <h2 className="text-2xl font-bold text-oyoya-purple mb-2 text-center">{radio.title}</h2>
                <div className="text-md text-oyoya-purple font-semibold mb-1 text-center">{radio.data}</div>
                <div className="text-sm text-gray-800 text-center whitespace-pre-line">
                    {radio.description[currentLang] || radio.description.it}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center space-y-12">
            <div className='w-full h-[400px] md:h-[500px] space-y-7 md:space-y-14 p-8 bg-cover bg-center flex flex-col items-center justify-center bg-[url(/assets/radio-hero.JPG)] mask-b-from-75% mask-b-to-100%'>
                <h1 className="hidden">{t('radios.title')}</h1>
                <p className="w-full md:w-[60%] text-[35px] md:text-7xl text-center font-bold text-white text-shadow-lg text-shadow-oyoya-purple/75">{t('radios.title')}</p>
                <p className="text-lg md:text-xl text-center font-bold text-white text-shadow-md text-shadow-oyoya-purple/75">{t('radios.subtitle')}</p>
            </div>

            
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <p className='text-xl md:text-2xl text-center font-bold text-oyoya-purple'>{t('radios.cta')}</p>
                <FaArrowDown className='text-oyoya-purple text-2xl animate-bounce' />
            </div>

            <div className="w-full max-w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 px-4">
                {radiosArray.map(radio => renderRadio(radio))}
            </div>
        </div>
    );
};

export default Radios; 