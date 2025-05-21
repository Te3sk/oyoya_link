import { useTranslation } from 'react-i18next';
import events from '../data/events.json';
import { useNavigate } from 'react-router-dom';

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
            <div key={event.id} className="bg-oyoya-purple/10 rounded-xl shadow p-6 flex flex-col items-center w-80" onClick={() => navigate(`/eventi/${event.id}`)}>
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
        <div className="min-h-screen w-full bg-white flex flex-col items-center py-12 px-4">
            <h1 className="text-3xl font-bold mb-10 text-oyoya-purple">{t('eventi.title')}</h1>
            <div className="w-full max-w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                {eventsArray.map(event => renderEvent(event))}
            </div>
        </div>
    );
};

export default Events; 