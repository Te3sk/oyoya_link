import "./App.css";
// dependencies
import { useState, useEffect } from "react";
// json whit all tailwindcss classname
import styles from "./components/styles.json";
// images
import oyoya_logo from "./assets/logo_white on trasp (temp).png";
import img_oyoyaParty from "./assets/playlist_img/oyoya_party_img.jpg";
// components
import MainBody from "./components/MainBody";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  
  //   setIsScrolled(scrollTop > 50);
  //   setIsAtBottom(scrollBottom);
  
  //   console.log("Scroll Top:", scrollTop);
  //   console.log("Scroll Bottom:", scrollBottom);
  // };
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Posizione attuale di scroll dall'inizio
    const windowHeight = window.innerHeight; // Altezza visibile del viewport
    const documentHeight = document.documentElement.scrollHeight; // Altezza totale del documento
  
    const isAtBottom = windowHeight + scrollTop >= documentHeight - 10; // Aggiunto un margine per tenere conto delle imprecisioni
    
    setIsScrolled(scrollTop > 50); // Header si ridimensiona se scrollTop è maggiore di 50px
    setIsAtBottom(isAtBottom); // Aggiorna isAtBottom se sei in fondo alla pagina
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      <Header isScrolled={isScrolled} />
      <MainBody />
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
