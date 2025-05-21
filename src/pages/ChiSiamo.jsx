import { useTranslation } from 'react-i18next';

const ChiSiamo = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[500px]">
                {/* Immagine di sfondo con overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/about-us-hero.JPG"
                        alt="Oyoya Hero"
                        className="w-full h-full object-cover"
                        onError={e => { e.target.onerror = null; e.target.src = '/assets/oyoya_logo.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-oyoya-purple/30"></div>
                </div>
                
                {/* Contenuto Hero */}
                <div className="relative h-full flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
                        {t('chiSiamo.heroTitle')}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white/90 text-center px-4 max-w-2xl">
                        {t('chiSiamo.heroSubtitle')}
                    </h2>
                </div>
            </div>

            {/* Strip divisoria */}
            <div
                className="w-full h-[50px] bg-oyoya-purple"
                style={{
                    backgroundImage: "url('/assets/oyoya_logo.jpg')",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "auto 100%",
                    backgroundPosition: "center"
                }}
            />

            {/* Sezione Testo 1 */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[800px] py-20 px-4 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-oyoya-purple mb-8 text-center">
                        La nostra visione
                    </h2>
                    <div className="text-gray-800 whitespace-pre-line text-lg text-center">
                        {t('chiSiamo.content.main-bio-1')}
                    </div>
                </div>
            </div>

            {/* Sezione Testo 2 */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1100px] px-4 pb-24 flex flex-col md:flex-row items-center gap-10">
                    {/* Colonna immagine */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/assets/oyoya_with_people.JPG"
                            alt="Placeholder"
                            className="rounded-lg shadow-lg max-w-[500px] w-full object-cover"
                        />
                    </div>
                    {/* Colonna testo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="text-gray-800 whitespace-pre-line text-lg text-center md:text-left">
                            {t('chiSiamo.content.main-bio-2')}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sezione Testo 3 */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[800px] pb-20 px-4 flex flex-col items-center">
                    <p className="text-2xl md:text-3xl font-semibold text-oyoya-purple text-center italic">
                        {t('chiSiamo.closing_quote')}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ChiSiamo; 