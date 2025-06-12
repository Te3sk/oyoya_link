// React imports
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Icons imports
import { FaArrowDown } from 'react-icons/fa';



// Data imports
import events from '../data/events.json';

const Events = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    console.log("events: ", events);

    // Converto gli eventi in array e li ordino per data decrescente
    const eventsArray = Object.entries(events)
        .map(([id, details]) => ({ id, ...details }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log("eventsArray: ", eventsArray);

    const renderEvent = (event) => {
        if (event.id === '0000') { // Template Event
            return null;
        }

        return (
            <div key={event.id} className="bg-oyoya-purple/10 rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80" onClick={() => navigate(`/eventi/${event.id}`)}>
                <img
                    src={event.image === '' ? '/assets/oyoya_logo.jpg' : `/assets/events/${event.image}`}
                    alt={event.title}
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                    onError={e => { e.target.onerror = null; e.target.src = '/assets/oyoya_logo.jpg'; }}
                />
                <h2 className="text-2xl font-bold text-oyoya-purple mb-2 text-center">{event.title}</h2>
                <div className="text-md text-oyoya-purple font-semibold mb-1 text-center">{event.date}</div>
                <a
                    href={event.maps_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-oyoya-yellow text-center"
                >
                    {event.location}
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center space-y-12">
            <div className='w-full h-[400px] md:h-[500px] space-y-7 md:space-y-14 p-8 bg-cover bg-center flex flex-col items-center justify-center bg-[url(/assets/events-hero.JPG)] mask-b-from-75% mask-b-to-100%'>
                <h1 className="hidden">{t('eventi.title')}</h1>
                <p className="w-full md:w-[60%] text-[35px] md:text-7xl text-center font-bold text-white text-shadow-lg text-shadow-oyoya-purple/75">{t('eventi.title')}</p>
                <p className="text-lg md:text-xl text-center font-bold text-white text-shadow-md text-shadow-oyoya-purple/75">{t('eventi.subtitle')}</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <p className='text-xl md:text-2xl text-center font-bold text-oyoya-purple'>{t('eventi.cta')}</p>
                <FaArrowDown className='text-oyoya-purple text-2xl animate-bounce' />
            </div>

            <div className="w-fullmax-w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 place-items-center">
                {eventsArray.map(event => renderEvent(event))}
            </div>
        </div>
    );
};

export default Events; 