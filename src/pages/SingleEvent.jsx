import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import events from '../data/events.json';

const SingleEvent = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  // Trova l'evento tramite id (può essere una chiave o un campo title)
  const event = events[id] || Object.values(events).find(e => e.title === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-2xl text-oyoya-purple font-bold">Evento non trovato</h1>
      </div>
    );
  }

  // Ottieni la descrizione nella lingua corrente, con fallback all'italiano
  const description = event.description[currentLang] || event.description.it;

  console.log("file name: ",event.image);
  console.log("file path: ",`/assets/events/${event.image}`);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl relative">
        <div
          onClick={() => navigate(-1)}
            className="absolute -left-4 top-4 text-oyoya-purple hover:text-oyoya-purple/70 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-oyoya-purple mb-8 text-center w-full">{event.title}</h1>
      </div>
      <div className="w-full max-w-4xl bg-oyoya-purple/10 rounded-xl shadow p-8 flex flex-col md:flex-row gap-18">
        {/* Colonna sinistra */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4">
          <img
            src={`/assets/events/${event.image}` || '/assets/oyoya_logo.jpg'}
            alt={event.title}
            className="w-48 h-48 object-cover rounded-lg mb-2"
            onError={e => { e.target.onerror = null; e.target.src = '/assets/oyoya_logo.jpg'; }}
          />
          <div className="text-md text-oyoya-purple font-semibold text-center md:text-left">{event.date}</div>
          <div className="text-md text-oyoya-purple font-semibold text-center md:text-left">
            {event.start_time} - {event.end_time}
          </div>
          <a
            href={event.maps_link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-oyoya-yellow text-center md:text-left"
          >
            {event.location}
          </a>
          {event.lineup && event.lineup.length > 0 && (
            <div className="mt-4 w-full flex flex-col md:items-end">
              <div className="font-semibold text-oyoya-purple mb-1">Lineup:</div>
              <div className="flex flex-col gap-1 pr-2 text-right">
                {[...event.lineup].sort((a, b) => a.localeCompare(b)).map((artist, idx) => (
                  <div key={idx} className="text-gray-800">{artist}</div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Colonna destra */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-lg md:text-2xl text-gray-800 text-center md:text-left leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent; 