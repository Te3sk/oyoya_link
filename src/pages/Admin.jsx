import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { convertUrl } from '../utils/imageUtils';

// const DRIVE_FILE_ID = '1tPWFWY01q5brQJ31TUECjkDdXjga7VYP';
// const CORS_PROXY = 'https://corsproxy.io/';
// const DRIVE_URL = `https://drive.google.com/uc?id=${DRIVE_FILE_ID}`;

const Admin = () => {
    const [addEvent, setAddEvent] = useState(false);
    const [addRadio, setAddRadio] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const newEventForm = () => {

        const eventData = {
            title: "Titolo-evento",
            date: "aaaa-mm-gg",
            start_time: "hh:mm",
            end_time: "hh:mm",
            location: "luogo",
            maps_link: "link-google-maps",
            description: {
                it: "descrizione in italiano",
                en: "description in english"
            },
            image: "link-immagine",
            lineup: [
                "artista-1",
                "artista-2",
                "artista-3"
            ]
        }

        return (
            <form className='w-full flex flex-col items-start justify-center gap-4 p-4'>
                <img
                    src={imageUrl || ""}
                    alt="Event preview"
                    className="max-w-full h-auto"
                />
                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Nome dell'evento</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Inserisci il nome"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                    />
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Data dell'evento</label>
                    <input
                        type="date"
                        name="date"
                        placeholder="AAAA-MM-GG"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                    />
                </div>

                <div className='w-full grid grid-cols-2 gap-4'>
                    <div className='w-full flex flex-col gap-2 mb-4'>
                        <label className='text-oyoya-purple font-semibold text-lg'>Ora di inizio</label>
                        <input
                            type="time"
                            name="start_time"
                            placeholder="HH:MM"
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 mb-4'>
                        <label className='text-oyoya-purple font-semibold text-lg'>Ora di Fine</label>
                        <input
                            type="time"
                            name="end_time"
                            placeholder="HH:MM"
                            className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                        />
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Luogo</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Inserisci il luogo"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                    />
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Link Google Maps</label>
                    <input
                        type="text"
                        name="maps_link"
                        placeholder="Inserisci il link"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple'
                    />
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Lineup</label>
                    {/* TODO: da fare, fare in modo di poter aggiungere più artisti, tasto più che aggiunge field */}
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Descrizione (italiano)</label>
                    <input
                        type="textarea"
                        name="description_it"
                        placeholder="Inserisci la descrizione in lingua italiana"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' style={{ height: '72px' }}
                    />
                </div>

                <div className='w-full flex flex-col gap-2 mb-4'>
                    <label className='text-oyoya-purple font-semibold text-lg'>Descrizione (inglese)</label>
                    <input
                        type="textarea"
                        name="description_en"
                        placeholder="Inserisci la descrizione in lingua inglese"
                        className='p-2 border border-gray-400 text-gray-800 rounded-lg focus:outline-none focus:border-oyoya-purple' style={{ height: '72px' }}
                    />
                </div>

                <button type='submit' className='w-full bg-oyoya-purple text-white font-semibold py-3 px-6 rounded-lg hover:bg-oyoya-purple/90 transition-colors' style={{ backgroundColor: '#553ed7' }}>
                    Aggiungi Evento
                </button>
            </form>
        )
    }


    useEffect(() => {
        const getImage = async () => {
            const tempurl = await convertUrl('https://drive.google.com/file/d/1B_BYaB6VfcEQ74U44FcMZ2oQTLDT7cyd/view?usp=sharing');
            console.log(tempurl);
            setImageUrl(tempurl);
        }
        try {
            getImage();
        } catch (error) {
            console.error('Errore nel caricamento dell\'immagine:', error);
        }
    }, []);


    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start'>
            {/* Hero Section */}
            <div className='w-full h-[250px] md:h-[400px] space-y-7 md:space-y-14 pt-12 bg-cover bg-center flex flex-col items-center justify-start md:justify-center bg-[url("/assets/admin-hero.jpg")]'>
                <p className='text-6xl md:text-8xl text-center font-bold text-white text-shadow-lg text-shadow-oyoya-purple/75'>Ciao King</p>
            </div>

            {/* Strip divisoria */}
            <div
                className="w-full h-[40px] bg-oyoya-purple"
                style={{
                    backgroundImage: "url('/assets/oyoya_logo.jpg')",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "auto 100%",
                    backgroundPosition: "center"
                }}
            />

            {/* Mobile Section */}
            <div className='flex flex-col md:hidden w-[90%]'>
                <div className='w-full flex flex-col items-start justify-start gap-4 pt-10'>
                    <div className='w-full flex flex-row items-center justify-between border-b-2 border-oyoya-purple/60 pb-4 cursor-pointer' onClick={() => setAddEvent(!addEvent)}>
                        <p className='text-4xl md:text-5xl font-semibold text-oyoya-purple'>Aggiungi Evento</p>
                        {addEvent ?
                            <FaChevronUp className='text-oyoya-purple text-2xl md:text-4xl' />
                            :
                            <FaChevronDown className='text-oyoya-purple text-2xl md:text-4xl' />
                        }
                    </div>

                    {addEvent && newEventForm()}

                </div>

                <div className='w-full flex flex-col items-start justify-start gap-12 pt-10'>
                    <div className='w-full flex flex-row items-center justify-between border-b-2 border-oyoya-purple/60 pb-4 cursor-pointer' onClick={() => setAddRadio(!addRadio)}>
                        <p className='text-4xl md:text-5xl font-semibold text-oyoya-purple'>Aggiungi Radio</p>
                        {addRadio ?
                            <FaChevronUp className='text-oyoya-purple text-2xl md:text-4xl' />
                            :
                            <FaChevronDown className='text-oyoya-purple text-2xl md:text-4xl' />
                        }
                    </div>

                </div>
            </div>

            {/* TODO: Desktop Section */}
            <div className='hidden md:flex w-[90%]'>
                <div className=''>

                </div>
            </div>

        </div>
    );
}

export default Admin;