import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '/assets/oyoya_logo.jpg';
import navLinksData from '../data/nav_links.json';

// Converti l'oggetto JSON in array mantenendo l'ordine delle chiavi
const navLinks = Object.keys(navLinksData)
  .sort((a, b) => parseInt(a) - parseInt(b))
  .map(key => navLinksData[key]);

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const lang = i18n.language.toUpperCase();

    const toggleLang = () => {
        const newLang = i18n.language === 'it' ? 'en' : 'it';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="bg-oyoya-purple text-white p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Oyoya Logo"
                        className="w-24 h-24 rounded-lg object-cover"
                    />
                </Link>

                {/* Navigation Links Desktop */}
                <nav className="hidden md:flex space-x-8 mr-10">
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} className="text-oyoya-yellow transition-colors">
                            <p className="text-xl hover:font-bold text-oyoya-yellow">{t(`nav.${link.key}`)}</p>
                        </Link>
                    ))}
                </nav>

                {/* Language Toggle Button - solo desktop */}
                <div
                    className="mx-4 items-center gap-2 text-oyoya-yellow hover:text-white transition-colors hidden md:flex cursor-pointer"
                    onClick={toggleLang}
                    aria-label="Cambia lingua"
                >
                    <FaGlobe size={22} />
                    <span className="font-bold">{lang}</span>
                </div>

                {/* Mobile Menu Button (solo se menu chiuso) */}
                {!mobileMenuOpen && (
                    <div
                        className="md:hidden text-white rounded-full p-2"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Apri menu"
                    >
                        <Menu className="text-oyoya-yellow" size={40} />
                    </div>
                )}
            </div>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-oyoya-purple bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 md:hidden transition-all">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-oyoya-yellow text-2xl font-bold"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <p className="text-2xl text-oyoya-yellow">{t(`nav.${link.key}`)}</p>
                            </Link>
                        ))}
                        {/* Language Toggle Button - solo mobile */}
                        <div
                            className="flex items-center gap-2 text-oyoya-yellow hover:text-white transition-colors cursor-pointer mt-6"
                            onClick={toggleLang}
                            aria-label="Cambia lingua"
                        >
                            <FaGlobe size={28} />
                            <span className="font-bold text-2xl">{lang}</span>
                        </div>
                    </div>
                    {/* Bottone X in alto a destra sopra l'overlay */}
                    <button
                        className="fixed top-4 right-4 z-60 bg-oyoya-yellow rounded-full p-2 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Chiudi menu"
                    >
                        <X className="text-oyoya-purple w-7 h-7" />
                    </button>
                </>
            )}
        </header>
    );
};

export default Header; 