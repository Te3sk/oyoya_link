import React from "react";
//asset
// import logo from "./assets/oyoya_logo.jpg";

export default function Header({setPage}) {
  var styles = {
    "main-container": "h-[150px] w-lvh flex flex-row bg-oyoya-purple",
    "left-logo-container": "w-[20%] flex flex-row items-center justify-center",
    "central-container": "w-[55%] flex flex-col lg:flex-row items-center justify-center",
    "central-writing": "lg:text-7xl text-5xl text-oyoya-yellow font-maru",
    "right-menù-container":
      "text-oyoya-yellow underline underline-offset-2 font-maru p-[10px] w-[25%] flex lg:flex-row items-center justify-between",
  };

  return (
    <div className='h-[150px] w-lvh flex flex-col bg-oyoya-purple'>
      {/* left logo container */}
      {/* <div className='w-[20%] flex flex-row items-center justify-center'>
        <img
          src="assets/oyoya_logo.jpg"
          alt="logo di oyoya: progetto di organizzazione eventi di musica elettronica"
          className="w-[120px] "
        />
      </div> */}
      {/* right container (writing and menu) */}
      {/* <div className='flex w-[80%] py-[5px] flex-col items-center  text-oyoya-yellow font-maru'>
        <div className='h-[80%] flex  items-center'>
            <h1 className='text-5xl lg:text-7xl'>OYOYA</h1>
        </div>
        <div className='h-[20%] w-[80%] justify-self-end flex flex-row items-center justify-between'>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("events")}>Eventi</button>
          <button onClick={() => setPage("radio")}>Radio</button>
          <button onClick={() => setPage("playlist")}>Playlist</button>
        </div>
      </div> */}
      {/* logo + title */}
      <div className="w-full h-[70%] flex flex-row items-center justify-between">
        {/* logo */}
        <div className="w-[30%] flex flex-row items-center justify-center">
          <img src="assets/oyoya_logo.jpg" alt="logo di oyoya" className="w-[100px] h-[100px]"/>
        </div>
        {/* scritta */}
        <div className="flex w-[70%] justify-center pr-[20px] pt-[15px] font-maru text-6xl font-extrabold text-oyoya-yellow">
          <h1>OYOYA</h1>
        </div>
      </div>
      {/* menu */}
      <div className="w-full h-[30%] px-[10px] flex flex-row items-center justify-around text-oyoya-yellow text-lg font-semibold">
        <button onClick={() => setPage("home")}>Home</button>
        <div className="w-[0px] h-[70%] border-[1.5px] border-oyoya-yellow"/>
        <button onClick={() => setPage("events")}>Events</button>
        <div className="w-[0px] h-[70%] border-[1.5px] border-oyoya-yellow"/>
        <button onClick={() => setPage("radio")}>Radio</button>
        <div className="w-[0px] h-[70%] border-[1.5px] border-oyoya-yellow"/>
        {/* <button onClick={() => setPage("playlist")}>Playlist</button> */}
        <button onClick={() => setPage("wip")}>Playlist</button>
        <div className="w-[0px] h-[70%] border-[1.5px] border-oyoya-yellow"/>
        {/* <button onClick={() => setPage("aboutus")}>About Us</button> */}
        <button onClick={() => setPage("wip")}>About Us</button>
      </div>
    </div>
  );
}
