import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      home: {
        title: 'Seguici sui nostri canali',
        instagram: 'Instagram',
        youtube: 'YouTube',
        telegram: 'Telegram',
        spotify: 'Spotify',
        whatsapp: 'WhatsApp',
      },
      eventi: {
        title: 'Eventi',
        soon: 'Questa sezione sarà presto disponibile!'
      },
      radios: {
        title: 'Radio',
        soon: 'Questa sezione sarà presto disponibile!'
      },
      nav: {
        home: 'Home',
        eventi: 'Eventi',
        radio: 'Radio',
        chiSiamo: 'Chi Siamo',
        contatti: 'Contatti'
      },
      footer: {
        contatti: 'Contatti',
        linkRapidi: 'Link Rapidi',
        seguici: 'Seguici',
        copyright: 'Tutti i diritti riservati.'
      },
      wip: {
        title: 'Scusate per il disagio!',
        desc: 'Stiamo lavorando per voi.\nQuesta sezione sarà presto disponibile.'
      },
      chiSiamo: {
        heroTitle: 'OYOYA, Ritmo, Visione',
        heroSubtitle: 'Dove la musica elettronica incontra l\'arte e si fa rito',
        content: {
          "main-bio-1": "Oyoya è una piattaforma multidisciplinare nata a Pisa il 6 gennaio 2023, dedicata alla musica elettronica, all’arte multimediale e alla creazione di connessioni tra le persone. Fonde suoni, immagini ed emozioni trasformando ogni evento in un’esperienza immersiva, unendo musica elettronica e arti visive per creare spazi in cui l’aggregazione e la condivisione siano parte integrante dell’arte stessa.",
          "main-bio-2": "Vogliamo essere un punto di riferimento per chi cerca un’esperienza artistica autentica, dove la qualità della musica e delle arti visive si fonda con un’atmosfera di libertà e positività. Creiamo spazi di aggregazione e divertimento per i giovani, offrendo un’alternativa reale alla monotonia e alla superficialità che spesso dominano la scena italiana. Con Oyoya, musica di qualità e inclusività vanno di pari passo, per costruire una comunità viva e dinamica."
        },
        closing_quote: "La nostra arte è fatta di corpi, frequenze e visioni condivise"
      },
      upcomingEvents: "Prossimi Eventi"
    }
  },
  en: {
    translation: {
      home: {
        title: 'Follow us on our channels',
        instagram: 'Instagram',
        youtube: 'YouTube',
        telegram: 'Telegram',
        spotify: 'Spotify',
        whatsapp: 'WhatsApp',
      },
      eventi: {
        title: 'Events',
        soon: 'This section will be available soon!'
      },
      radios: {
        title: 'Radios',
        soon: 'This section will be available soon!'
      },
      nav: {
        home: 'Home',
        eventi: 'Events',
        radio: 'Radios',
        chiSiamo: 'About Us',
        contatti: 'Contacts'
      },
      footer: {
        contatti: 'Contacts',
        linkRapidi: 'Quick Links',
        seguici: 'Follow us',
        copyright: 'All rights reserved.'
      },
      wip: {
        title: 'Sorry for the inconvenience!',
        desc: 'We are working for you.\nThis section will be available soon.'
      },
      chiSiamo: {
        heroTitle: 'OYOYA, Rhythm, Vision',
        heroSubtitle: 'Where electronic music meets art and becomes a ritual',
        content: {
          "main-bio-1": "Oyoya is a multidisciplinary platform born in Pisa (PI, Italy) on January 6, 2023, dedicated to electronic music, multimedia art, and bringing people together. It merges sound, visuals, and emotions, turning every event into an immersive experience, blending electronic music and visual arts to create spaces where connection and sharing become an integral part of the art itself.",
          "main-bio-2": "We strive to be a reference point for those seeking an authentic artistic experience, where high-quality music and visual arts meet a free and uplifting atmosphere. We create spaces for young people to gather and have fun, offering a real alternative to the monotony and superficiality that often dominate the Italian scene. With Oyoya, quality music and inclusivity go hand in hand, building a vibrant and dynamic community."
        },
        closing_quote: "Our art is made of bodies, frequencies and shared visions"
      },
      upcomingEvents: "Upcoming Events"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 