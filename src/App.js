import "./App.css";
// dependencies
import { useState, useEffect } from "react";
// components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Radio from "./components/Radio.js";
import Events from "./components/Events.js";
import Playlist from "./components/Playlist.js";
import Wip from "./components/Wip.js";


function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="flex flex-col justify-stretch">
      <div className="h-[150px]">
        <Header setPage = {setPage}/>
      </div>
      <div className="h-fit-content">
        {page === "home" ? <Home setPage = {setPage}/> : null}
        {page === "events" ? <Events /> : null}
        {page === "radio" ? <Radio /> : null}
        {page === "playlist" ? <Playlist /> : null}
        {page === "wip" ? <Wip setPage = {setPage} /> : null}
      </div>
      <div className="h-[150px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
