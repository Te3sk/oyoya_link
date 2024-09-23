import "./App.css";
// dependencies
import { useState, useEffect } from "react";
// json whit all tailwindcss classname
import styles from "./components/styles.json";
// images
import logo from "./assets/logo_white on black.png";
import oyoya_logo from "./assets/end_fossil_img.jpg";
import img_oyoyaParty from "./assets/oyoya_party_img.jpg";
// components
// import Header from "./components/Header";
import Footer from "./components/Footer";
import EventView from "./components/EventView";
import HomeView from "./components/HomeView";
import RadioView from "./components/RadioView";

// TODO - settare date in app (eventi, radio e altro) da com'è scritto (da yyyy-mm-dd a una visione decente)

function App() {
  // SCROLLING
  // useStates to handle scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  // handler function for scrolling
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Posizione attuale di scroll dall'inizio
    const windowHeight = window.innerHeight; // Altezza visibile del viewport
    const documentHeight = document.documentElement.scrollHeight; // Altezza totale del documento

    const isAtBottom = windowHeight + scrollTop >= documentHeight - 10; // Aggiunto un margine per tenere conto delle imprecisioni

    setIsScrolled(scrollTop > 50); // Header si ridimensiona se scrollTop è maggiore di 50px
    setIsAtBottom(isAtBottom); // Aggiorna isAtBottom se sei in fondo alla pagina
  };
  // useEffect to handle scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PAGE CHANGING
  // useState to handle the current page
  const [page, setPage] = useState("home");
  // handler function for choice which page to render
  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomeView />;
      case "events":
        return <EventView />;
      case "radios":
        return <RadioView />;
      default:
        return <HomeView />;
    }
  };
  // handler function for changing the page
  const changePage = (page) => {
    console.log("cambio pagina: ", page);
    setPage(page);
  };

  // HEADER
  const Header = ({ isScrolled }) => {
    return (
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black transition-all duration-300 ${
          isScrolled ? "h-16" : "h-32"
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 ml-5 ${
              isScrolled ? "w-12" : "w-24"
            }`}
          />
          <nav className="text-white">
            <ul className="flex space-x-4">
              <button onClick={() => {changePage("home")}}>Home</button>
              <button onClick={() => {changePage("events")}}>Eventi</button>
              <button onClick={() => {changePage("radios")}}>Radio</button>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <div className="min-h-lvh">
      <Header isScrolled={isScrolled} className="sticky top-0 z-50" />
      {renderPage()}
      <Footer isAtBottom={isAtBottom} />
    </div>
  );
}

export default App;
