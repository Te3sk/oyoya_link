import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      home: {
        heroTitle1: 'Connessioni d\'Arte',
        heroTitle2: 'Ritmiche, Visive, Umane',
        heroSubtitle: 'Fondi l\'energia della musica elettronica con la forza dell\'arte multimediale in spazi di libertà, divertimento e condivisione.',
      },
      links: {
        followUs: 'Seguici sui nostri canali',
        instagram: 'Instagram',
        youtube: 'YouTube',
        telegram: 'Telegram',
        spotify: 'Spotify',
        whatsapp: 'WhatsApp',
      },
      eventi: {
        title: 'La Nostra Collezione di Eventi Immersivi',
        subtitle: 'Dalle esperienze che hanno segnato la nostra storia alle prossime avventure che stiamo plasmando per te.',
        cta: "Scopri tutti gli eventi",
        soon: 'Questa sezione sarà presto disponibile!'
      },
      radios: {
        title: 'Un Archivio di Suoni e Visioni',
        subtitle: 'Immergiti nelle nostre sessioni esclusive: dj set, live set e performance audio-visuali curate da artisti Oyoya e ospiti speciali.',
        cta: 'Sintonizzati sull\'Esperienza',
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
        title: 'OYOYA, Ritmo, Visione',
        subtitle: 'Dove la musica elettronica incontra l\'arte e si fa rito',
        content: {
          "main-bio-1": "Oyoya è una piattaforma multidisciplinare nata a Pisa il 6 gennaio 2023, dedicata alla musica elettronica, all'arte multimediale e alla creazione di connessioni tra le persone. Fonde suoni, immagini ed emozioni trasformando ogni evento in un'esperienza immersiva, unendo musica elettronica e arti visive per creare spazi in cui l'aggregazione e la condivisione siano parte integrante dell'arte stessa.",
          "main-bio-2": "Vogliamo essere un punto di riferimento per chi cerca un'esperienza artistica autentica, dove la qualità della musica e delle arti visive si fonda con un'atmosfera di libertà e positività. Creiamo spazi di aggregazione e divertimento per i giovani, offrendo un'alternativa reale alla monotonia e alla superficialità che spesso dominano la scena italiana. Con Oyoya, musica di qualità e inclusività vanno di pari passo, per costruire una comunità viva e dinamica."
        },
        closing_quote: "La nostra arte è fatta di corpi, frequenze e visioni condivise"
      },
      contatti : {
        title: 'Dal dancefloor alla inbox',
        subtitle: 'Scrivici per collaborazioni, booking, domande o solo per dire ciao!',
        email: 'oyoya.info@gmail.com',
        phone1: '+39 351 467 0566',
        phone2: '+39 342 828 1283',
        name: 'Nome completo',
        emailLabel: 'Email',
        phone: 'Numero di telefono',
        subject: 'Oggetto',
        category: 'Categoria',
        selectCategory: 'Seleziona una categoria',
        collab: 'Collaborazioni artistiche',
        booking: 'Booking & ospitate',
        venue: 'Venue e location',
        press: 'Press & media',
        volontariato: 'Volontariato e team',
        domande: 'Domande randomiche',
        message: 'Messaggio',
        send: 'Invia messaggio',
        privacy: 'Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 e del GDPR (Regolamento UE 2016/679)',
      },
      upcomingEvents: "Prossimi Eventi"
    }
  },
  en: {
    translation: {
      home: {
        heroTitle1: 'Art Connections',
        heroTitle2: 'Rhythmic, Visual, Human',
        heroSubtitle: 'Blend the energy of electronic music with the power of multimedia art in spaces of freedom, fun and sharing.',
      },
      links: {
        followUs: 'Follow us on our channels',
        instagram: 'Instagram',
        youtube: 'YouTube',
        telegram: 'Telegram',
        spotify: 'Spotify',
        whatsapp: 'WhatsApp',
      },
      eventi: {
        title: 'Our Immersive Events Collection',
        subtitle: 'From the experiences that have marked our history to the next adventures we are shaping for you.',
        cta: "Discover all events",
        soon: 'This section will be available soon!'
      },
      radios: {
        title: 'An Archive of Sounds and Visions',
        subtitle: 'Immerse yourself in our exclusive sessions: dj sets, live sets and audio-visual performances curated by Oyoya artists and special guests.',
        cta: 'Tune in to the Experience',
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
        title: 'OYOYA, Rhythm, Vision',
        subtitle: 'Where electronic music meets art and becomes a ritual',
        content: {
          "main-bio-1": "Oyoya is a multidisciplinary platform born in Pisa (PI, Italy) on January 6, 2023, dedicated to electronic music, multimedia art, and bringing people together. It merges sound, visuals, and emotions, turning every event into an immersive experience, blending electronic music and visual arts to create spaces where connection and sharing become an integral part of the art itself.",
          "main-bio-2": "We strive to be a reference point for those seeking an authentic artistic experience, where high-quality music and visual arts meet a free and uplifting atmosphere. We create spaces for young people to gather and have fun, offering a real alternative to the monotony and superficiality that often dominate the Italian scene. With Oyoya, quality music and inclusivity go hand in hand, building a vibrant and dynamic community."
        },
        closing_quote: "Our art is made of bodies, frequencies and shared visions"
      },
      contatti : {
        title: 'From dancefloor to inbox',
        subtitle: 'Write to us for collaborations, bookings or just to say hello!',
        email: 'oyoya.info@gmail.com',
        phone1: '+39 123 456 7890',
        phone2: '+39 098 765 4321',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        subject: 'Subject',
        category: 'Category',
        selectCategory: 'Select a category',
        collab: 'Artistic collaborations',
        booking: 'Bookings & hosted',
        venue: 'Venues & locations',
        press: 'Press & media',
        volontariato: 'Volunteering & team',
        domande: 'Random questions',
        message: 'Message',
        send: 'Send message',
        privacy: 'I authorize the processing of my personal data in accordance with the Legislative Decree 30 June 2003, n. 196 and the GDPR (Regulation (EU) 2016/679)',
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