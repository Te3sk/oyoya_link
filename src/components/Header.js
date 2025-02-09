import React from "react";

export default function Header({setPage}) {
  var styles = {
    "main_container" : 'h-[180px] w-lvh flex flex-col bg-oyoya-purple',
    "logo_title_container" : 'w-full h-[70%] flex flex-row items-center justify-between',
    "logo" : 'w-[30%] flex flex-row items-center justify-center',
    "scritta" : "flex w-[70%] justify-center pr-[30px] pt-[15px] font-maru text-6xl font-extrabold text-oyoya-yellow",
    "menu" : "w-full h-[30%] px-[10px] flex flex-row items-center justify-around text-oyoya-yellow text-lg font-semibold",
    "menu_item" : "w-[0px] h-[70%] border-[1.5px] border-oyoya-yellow"
  };


  return (
    <div className={styles.main_container}>
      {/* logo + title */}
      <div className={styles.logo_title_container}>
        {/* logo */}
        <div className={styles.logo} onClick={() => setPage("home")}>
          <img src="assets/oyoya_logo.jpg" alt="logo di oyoya" className="w-[100px] h-[100px]"/>
        </div>
        {/* scritta */}
        <div className={styles.scritta}>
          <h1>OYOYA</h1>
        </div>
      </div>
      {/* menu */}
      <div className={styles.menu}>
        <button onClick={() => setPage("home")}>Home</button>
        <div className={styles.menu_item}/>
        <button onClick={() => setPage("events")}>Events</button>
        <div className={styles.menu_item}/>
        <button onClick={() => setPage("radio")}>Radio</button>
        <div className={styles.menu_item}/>
        {/* <button onClick={() => setPage("playlist")}>Playlist</button> */}
        <button onClick={() => setPage("wip")}>Playlist</button>
        <div className={styles.menu_item}/>
        <button onClick={() => setPage("about")}>About Us</button>
      </div>
    </div>
  );
}
