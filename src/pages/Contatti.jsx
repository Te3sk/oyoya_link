import { useState } from 'react';
import { CircleX, CircleCheck } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTelegramPlane, FaEnvelope, FaPhone } from 'react-icons/fa';

const isValidEmail = (email) => {
    // Regex semplice per email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone) => {
    // Regex semplice per numeri italiani e internazionali, accetta anche spazi e +39
    return /^\+?\d{6,15}$/.test(phone.replace(/\s/g, ''));
};

const Contatti = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const missingFields = [];

        const requiredFields = [
            { value: name, name: 'Nome completo' },
            { value: subject, name: 'Oggetto' },
            { value: category, name: 'Categoria' },
            { value: message, name: 'Messaggio' },
        ];

        requiredFields.forEach(field => {
            if (!field.value || field.value === '') {
                missingFields.push(field.name);
            }
        });

        if (missingFields.length > 0) {
            setError(`Per favore, completa tutti i campi obbligatori: ${missingFields.join(', ')}.`);
            console.log(error);
            return;
        }

        if (!email && !phone) {
            setError('Inserisci almeno un contatto: email o numero di telefono.');
            return;
        }
        if (email && !isValidEmail(email)) {
            setError('Inserisci un indirizzo email valido.');
            return;
        }
        if (phone && !isValidPhone(phone)) {
            setError('Inserisci un numero di telefono valido.');
            return;
        }

        if (!privacy) {
            setError('Per favore, autorizza il trattamento dei tuoi dati personali.');
            return;
        }

        // TODO: Inviare il messaggio a qualcosa

        setError(null);
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setCategory('');
        setMessage('');
        setPrivacy(false);
    };

    const renderError = () => {
        if (error) {
            return (
                <div className='flex items-center gap-2 bg-red-100 border border-red-400 p-2 rounded-lg min-h-[50px] mb-[10px]'>
                    <CircleX size={20} className='text-red-500' />
                    <p className='text-red-500'>{error}</p>
                </div>
            );
        } else {
            return null;
        }
    };

    const renderSuccess = () => {
        if (success) {
            return (
                <div className='flex items-center gap-2 bg-green-100 border border-green-400 p-2 rounded-lg min-h-[50px] mb-[10px]'>
                    <CircleCheck size={20} className='text-green-500' />
                    <p className='text-green-500'>Il tuo messaggio è stato inviato con successo! Ti risponderemo il prima possibile.</p>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className='w-full flex flex-col md:flex-row min-h-screen'>
            {/* Colonna sinistra edge-to-edge */}
            <div className='relative w-full md:w-1/2 flex flex-col items-end justify-between min-h-screen'>
                {/* Immagine di sfondo */}
                <div className='absolute inset-0 w-full h-full overflow-hidden'>
                    <img
                        src='/assets/contact-sx.JPG'
                        alt='placeholder'
                        className='w- full h-full [15 0%] object-cover object-[47%]'
                    />
                    <div className='absolute inset-0 bg-white/40 '></div>
                </div>
                {/* Contenuto sopra l'immagine */}
                <div className='relative z-10 flex flex-col justify-start h-lvh w-3/4 mr-16 p-8 gap -20 items-end text-right'>
                    
                        <h1 className='text-3xl sm:text-2xl font-bold mb-2 text-oyoya-yellow'>Dal dancefloor alla inbox</h1>
                        <h2 className='text-lg text-white my-6'>Scrivici per collaborazioni, booking, domande o solo per dire ciao!</h2>
                        <div className='my-14'>
                            <div className='flex items-center justify-end gap-2 mb-2'>
                                <FaEnvelope size={20} className='text-oyoya-yellow' />
                                {/* <span className='font-semibold text-oyoya-yellow'>Email:</span> */}
                                <a href='mailto:info@oyoya.it'><p className='text-white underline'>oyoya.info@gmail.com</p></a>
                            </div>
                            <div className='flex items-center justify-end gap-2 mb-1'>
                                <FaPhone size={20} className='text-oyoya-yellow' />
                                {/* <span className='font-semibold text-oyoya-yellow'>Telefono 1:</span> */}
                                <a href='tel:+391234567890'><p className='text-white'>+39 123 456 7890</p></a>
                            </div>
                            <div className='flex items-center justify-end gap-2'>
                                <FaPhone size={20} className='text-oyoya-yellow' />
                                {/* <span className='font-semibold text-oyoya-yellow'>Telefono 2:</span> */}
                                <a href='tel:+390987654321'><p className='text-white'>+39 098 765 4321</p></a>
                            </div>
                        </div>
                    <div className='mb-4 mt-48'>
                        <h3 className='text-base font-semibold text-oyoya-yellow mb-2'>Seguici sui nostri canali</h3>
                        <div className='flex justify-end gap-4'>
                            <a href='https://www.instagram.com/oyoya.music/?utm_source=ig_web_button_share_sheet' target='_blank' rel='noopener noreferrer'>
                                <FaInstagram size={28} className='text-oyoya-yellow hover:text-oyoya-yellow transition-colors' />
                            </a>
                            <a href='https://www.youtube.com/@oyoyamusic' target='_blank' rel='noopener noreferrer'>
                                <FaYoutube size={28} className='text-oyoya-yellow hover:text-oyoya-yellow transition-colors' />
                            </a>
                            <a href='https://t.me/+cyVEBMHRvpg1NWQ0' target='_blank' rel='noopener noreferrer'>
                                <FaTelegramPlane size={28} className='text-oyoya-yellow hover:text-oyoya-yellow transition-colors' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Colonna destra: form */}
            <div className='w-full md:w-1/2 flex flex-col justify-center mb-24 mt-10 px-4 max-w-2xl mx-auto'>
                {error ? renderError() : (success ? renderSuccess() : <div className='h-[60px]'></div>)}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className="text-oyoya-purple font-semibold">
                                Nome completo
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-oyoya-purple font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-oyoya-purple font-semibold">
                                Numero di telefono
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-oyoya-purple font-semibold">
                                Oggetto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="category" className="text-oyoya-purple font-semibold">
                                Categoria
                            </label>
                            <select
                                id="category"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple bg-white"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="">Seleziona una categoria</option>
                                <option value="collaborazioni">Collaborazioni artistiche</option>
                                <option value="booking">Booking & ospitate</option>
                                <option value="venue">Venue e location</option>
                                <option value="press">Press & media</option>
                                <option value="volontariato">Volontariato e team</option>
                                <option value="domande">Domande randomiche</option>
                                <option value="altro">Altro</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-oyoya-purple font-semibold">
                                Messaggio
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="p-2 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple resize-none"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-2 mt-4">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="mt-1"
                                onChange={e => setPrivacy(e.target.checked)}
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-600">
                                Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 e del GDPR (Regolamento UE 2016/679)
                            </label>
                        </div>

                        <div
                            type="submit"
                            onClick={handleSubmit}
                            className="mt-6 bg-oyoya-purple text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-oyoya-purple/90 transition-colors"
                        >
                            Invia messaggio
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contatti;