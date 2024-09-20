import "./App.css";
// dependencies
import { useState, useEffect } from "react";
// json whit all tailwindcss classname
import styles from "./components/styles.json";
// images
import logo from "./assets/logo_white on black.png";
import oyoya_logo from "./assets/playlist_img/end_fossil_img.jpg";
import img_oyoyaParty from "./assets/playlist_img/oyoya_party_img.jpg";
// components
// import Header from "./components/Header";
import Footer from "./components/Footer";
import EventView from "./components/EventView";
import HomeView from "./components/HomeView";

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
        className={`fixed top-0 left-0 w-full bg-black transition-all duration-300 ${
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
    <div>
      <Header isScrolled={isScrolled} />
      {renderPage()}
      <Footer isAtBottom={isAtBottom} />
    </div>
  );

  // // ! box for what ?
  // const Box = ({ title, link, cover }) => {
  //   const handleClick = (pl_url) => {
  //     window.open(pl_url);
  //   };

  //   return (
  //     <div
  //       className="relative border-2 border-amber-300 h-20 w-11/12 m-3 flex flex-row items-center"
  //       onClick={handleClick(link)}
  //     >
  //       <div className="w-16 h-16 ml-2 bg-lime-400">
  //         {cover ? (
  //           <img
  //             src={cover}
  //             alt="playlist cover"
  //             className="w-16 h-16 object-fill"
  //           />
  //         ) : (
  //           <></>
  //         )}
  //       </div>
  //       <div className="m-5 w-8/12 text-lg font-bold text-white text-left absolute right-0">
  //         {title}
  //       </div>
  //     </div>
  //   );
  // };
  // return (
  //   <div className="relative flex flex-col h-screen w-screen bg-black">
  //     {/* header */}
  //     <div className="w-screen my-8 flex h-1/6 justify-center items-center">
  //       <div className="w-1/2">
  //         <img src={oyoya_logo} alt="logo" />
  //       </div>
  //     </div>
  //     {/* central */}
  //     <MainBody className="flex-grow h-4/6 overflow-scroll" />
  //     {/* bottom */}
  //     {/* <Footer className="h-1/6 fixed bottom-0 left-0 right-0" /> */}
  //     <div className="absolute inset-x-0 bottom-0 bg-black h-1/6 flex items-center justify-center mt-3">
  //       <p className="text-white">pisello</p>
  //     </div>
  //   </div>
  // );
}

export default App;
