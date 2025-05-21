import events from '../data/events.json';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const UpcomingEvents = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const today = new Date();
    const in14Days = new Date();
    in14Days.setDate(today.getDate() + 14);

    // Filtra eventi tra oggi e oggi+14 giorni
    const upcomingEvents = useMemo(() => {
        return Object.entries(events)
            .map(([id, details]) => ({ id, ...details }))
            .filter(event => {
                if (event.id === '0000') return false; // ignora template
                if (!event.date) return false;
                const eventDate = new Date(event.date);
                // Solo eventi >= oggi e <= oggi+14 giorni
                return eventDate >= today && eventDate <= in14Days;
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }, [today, in14Days]);

    if (upcomingEvents.length === 0) return null;

    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className="text-3xl text-center md:text-left font-bold mb-10 text-oyoya-purple">{t('upcomingEvents')}</h1>
            <div className="w-full flex flex-wrap gap-8 justify-center">
                {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-[#eeebfa]/70 rounded-xl shadow p-6 flex flex-col items-center w-80 cursor-pointer" onClick={() => navigate(`/eventi/${event.id}`)}>
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
                            onClick={e => e.stopPropagation()}
                        >
                            {event.location}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents; 