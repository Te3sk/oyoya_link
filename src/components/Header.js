import React from "react";

import dbstyles from "./styles.json"

export default function Header({setPage}) {

  const styles = dbstyles.header;

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
        {/* <button onClick={() => setPage("aboutus")}>About Us</button> */}
        <button onClick={() => setPage("wip")}>About Us</button>
      </div>
    </div>
  );
}
