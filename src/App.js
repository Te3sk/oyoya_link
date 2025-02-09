import "./App.css";
// dependencies
import { useState } from "react";
// components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Radio from "./components/Radio.js";
import Events from "./components/Events.js";
import Playlist from "./components/Playlist.js";
import Wip from "./components/Wip.js";
import SinglePage from "./components/SinglePage.js";
import AboutUs from "./components/AboutUs.js";


function App() {
  const [page, setPage] = useState("home");

  const singlePage = (page) => {
    const current_pages = ["home", "events", "radio", "playlist", "about", "wip"]
    
    if (page === "" || page === null || page === undefined || page === " ") {
      return false;
    }

    for (var i = 0; i < current_pages.length; i++) {
      if (page === current_pages[i]) {
        return false;
      }
    }

    return true;
  } 

  return (
    <div className="flex flex-col justify-stretch">
      <div className="">
        <Header setPage = {setPage}/>
      </div>
      <div className="h-fit-content">
        {page === "home" ? <Home setPage = {setPage}/> : null}
        {page === "events" ? <Events /> : null}
        {page === "radio" ? <Radio /> : null}
        {page === "playlist" ? <Playlist /> : null} 
        {page === "about" ? <AboutUs setPage = {setPage} /> : null}
        {page === "wip" ? <Wip setPage = {setPage} /> : null}
        {/* {page !== "" ? <SinglePage page={page} setPage={setPage} /> : null} */}
      </div>
      <div className="h-[150px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
