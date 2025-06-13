import { useState, useRef } from 'react';
import { CircleX, CircleCheck } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTelegramPlane, FaEnvelope, FaPhone, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';


const isValidEmail = (email) => {
    // Regex semplice per email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone) => {
    // Regex semplice per numeri italiani e internazionali, accetta anche spazi e +39
    return /^\+?\d{6,15}$/.test(phone.replace(/\s/g, ''));
};

const Contatti = () => {
    const form = useRef();
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    // const [sectionError, setSectionError] = useState({ section: 'name', message: 'Campo obbligatorio' });
    const [sectionError, setSectionError] = useState(null);
    const [loading, setLoading] = useState(false);

    const serviceId = "service_x9cb4v3";
    const templateId = "template_16ru8q2";
    const publicKey = "H0HkuZXGmU6b8XuUJ";

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    console.log(e.target);
                    setLoading(false);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error);
                    setError("C'è stato un errore nell'invio del messaggio. Per favore, riprova più tardi o contattaci direttamente all'indirizzo oyoya.info@gmail.com.");
                    setLoading(false);
                    setTimeout(() => {
                        setError(null);
                    }, 3000);
                },
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setSectionError(null);

        if (!name || name === '') {
            console.log("name error");
            setSectionError({ section: 'name', message: 'Campo obbligatorio' });
            return;
        }

        if (!email && !phone) {
            setSectionError({ section: 'phone', message: 'Inserisci almeno un contatto' });
            setSectionError({ section: 'email', message: 'Inserisci almeno un contatto' });
            return;
        }

        if (email && !isValidEmail(email)) {
            setSectionError({ section: 'email', message: 'Inserisci un indirizzo email valido.' });
            return;
        }

        if (phone && !isValidPhone(phone)) {
            setSectionError({ section: 'phone', message: 'Inserisci un numero di telefono valido.' });
            return;
        }

        if (!category || category === '') {
            setSectionError({ section: 'category', message: 'Campo obbligatorio' });
            return;
        }

        if (!subject || subject === '') {
            setSectionError({ section: 'subject', message: 'Campo obbligatorio' });
            return;
        }

        if (!privacy) {
            setSectionError({ section: 'privacy', message: 'Campo obbligatorio' });
            return;
        }

        sendEmail(e);

        // TODO: Inviare il messaggio a qualcosa

        setError(null);
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
                <div
                    // className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-red-100 border border-red-400 p-4 rounded-lg shadow-lg min-h-[50px] animate-fade-in"
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col md:flex-row items-center gap-2 bg-red-100/85 border border-red-400 p-4 rounded-lg shadow-lg min-h-[50px] animate-fade-in"
                    style={{ minWidth: '300px', maxWidth: '90vw' }}
                >
                    <CircleX size={35} className="text-red-500" />
                    <p className="text-red-500 font-semibold text-lg text-center">{error}</p>
                </div>
            );
        } else {
            return null;
        }
    };

    const renderSectionError = (section) => {
        if (sectionError && sectionError.section === section) {
            return (
                <div className='text-red-500 text-sm'>{sectionError.message}</div>
            );
        } else {
            return (
                <div className='text-transparent text-sm'>o</div>
            );
        }
    }

    const renderSuccess = () => {
        if (success) {
            return (
                <div
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col md:flex-row items-center gap-2 bg-green-100/85 border border-green-400 p-4 rounded-lg shadow-lg min-h-[50px] animate-fade-in"
                    style={{ minWidth: '300px', maxWidth: '90vw' }}
                >
                    <CircleCheck size={35} className="text-green-800" />
                    <p className="text-green-800 font-semibold text-lg text-center">Il tuo messaggio è stato inviato con successo! Ti risponderemo il prima possibile.</p>
                </div>
            );
        }
        return null;
    };

    const renderSocials = () => {
        return (
            <div className='flex flex-row items-center md:items-end gap-6'>
                <a style={{ color: 'white', textDecoration: 'none' }} className='flex flex-row items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'><FaInstagram />{t('links.instagram')}</a>
                <a style={{ color: 'white', textDecoration: 'none' }} className='flex flex-row items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'><FaYoutube />{t('links.youtube')}</a>
                <a style={{ color: 'white', textDecoration: 'none' }} className='flex flex-row items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'><FaTelegramPlane />{t('links.telegram')}</a>
            </div>
        );
    }

    const renderForm = () => {
        return (
            <form ref={form} onSubmit={handleSubmit}>
                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.name')}</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' />
                    {renderSectionError('name')}
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.emailLabel')}</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' />
                        {renderSectionError('email')}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.phone')}</label>
                        <input
                            type="tel"
                            name="tel"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' />
                        {renderSectionError('phone')}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.subject')}</label>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' />
                        {renderSectionError('subject')}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.category')}</label>
                        <select
                            name="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'>
                            <option value="">{t('contatti.selectCategory')}</option>
                            <option value="collaborazioni">{t('contatti.collab')}</option>
                            <option value="booking">{t('contatti.booking')}</option>
                            <option value="venue">{t('contatti.venue')}</option>
                            <option value="press">{t('contatti.press')}</option>
                            <option value="volontariato">{t('contatti.volontariato')}</option>
                            <option value="domande">{t('contatti.domande')}</option>
                        </select>
                        {renderSectionError('category')}
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-oyoya-purple font-semibold text-lg'> {t('contatti.message')}</label>
                    <textarea name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' />
                </div>

                <button
                    type="submit"
                    // onClick={handleSubmit}
                    className="mt-8 w-full bg-oyoya-purple text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-oyoya-purple/90 transition-colors"
                    style={loading ? { backgroundColor: '#7865df' } : { backgroundColor: '#553ed7' }}
                >
                    {loading ? <FaSpinner className='animate-spin place-self-center' /> : t('contatti.send')}
                </button>

                <div className='flex items-start md:items-center gap-4 my-4'>
                    <input
                        type="checkbox"
                        id="privacy"
                        className="mt-1 w-5 h-5 accent-oyoya-purple border-gray-400 rounded checked:bg-oyoya-purple focus:ring-oyoya-purple transition-colors"
                        onChange={e => setPrivacy(e.target.checked)}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                        {t('contatti.privacy')}
                    </label>
                </div>
                {renderSectionError('privacy')}
            </form>
        );
    }

    const renderContacts = () => {
        return (
            <div className='flex flex-col items-center md:items-end gap-2'>
                <a
                    href='mailto:oyoya.info@gmail.com'
                    className='flex flex-row md:flex-row-reverse items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    <FaEnvelope className='text-oyoya-yellow' />
                    {t('contatti.email')}
                </a>
                <a
                    href='tel:+391234567890'
                    className='flex flex-row md:flex-row-reverse items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    <FaPhone className='text-oyoya-yellow' />
                    {t('contatti.phone1')}
                </a>
                <a
                    href='tel:+390987654321'
                    className='flex flex-row md:flex-row-reverse items-center gap-2 text-md md:text-lg text-center font-bold text-shadow-md [&]:text-white visited:!text-white hover:!text-oyoya-yellow focus:!text-oyoya-yellow active:!text-oyoya-yellow no-underline'
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    <FaPhone className='text-oyoya-yellow' />
                    {t('contatti.phone2')}
                </a>
            </div >
        );
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* Colonna sinistra (immagine) */}
            <div className='col-span-1 w-full bg-[url(/assets/contact-sx.JPG)] bg-cover h-[450px] md:h-[calc(100vh_-_114px)] bg-no-repeat bg-[47%_center]'>
                <div className='w-full h-full bg-white/40 flex flex-col items-center md:items-end justify-between p-8 '>
                    {/* Titolo */}
                    <p className='text-4xl md:text-7xl text-center md:text-right font-bold text-oyoya-yellow text-shadow-lg text-shadow-oyoya-purple/75'>{t('contatti.title')}</p>
                    {/* Sottotitolo */}
                    {/* <p className='text-lg md:text-xl text-center font-bold text-oyoya-yellow text-shadow-md text-shadow-oyoya-purple/75'>{t('contatti.subtitle')}</p> */}
                    <div className='flex flex-col items-center md:items-end gap-4 md:gap-6'>
                        {/* Contatti */}
                        {renderContacts()}
                        {/* Social links */}
                        <p className='text-lg md:text-xl text-center font-bold text-oyoya-yellow text-shadow-md text-shadow-oyoya-purple/75'>{t('links.followUs')}</p>
                        {renderSocials()}
                    </div>
                </div>
            </div>

            {/* Colonna destra (form) */}
            <div className='col-span-1 w-full bg-oyoya-purple/10 flex flex-col justify-top items-center p-8'>
                {/* Titolo */}
                <p className='text-2xl md:text-4xl text-center font-bold text-oyoya-purple mb-8'>{t('contatti.subtitle')}</p>
                {/* Form */}
                {renderForm()}
            </div>

            {renderError()}
            {renderSuccess()}
        </div>
    );
}

export default Contatti;