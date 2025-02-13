import React from "react";
import { useState } from "react";

export default function Header({ page, setPage }) {
  const [menu, setMenu] = useState(false);

  const closedToggle = {
    "1" : "bg-oyoya-yellow h-[2px] w-7 transform transition-all duration-300 origin-left",
    "2" : "bg-oyoya-yellow h-[2px] w-7 rounded transform transition-all duration-300",
    "3" : "bg-oyoya-yellow h-[2px] w-7 transform transition-all duration-300 origin-left"
  }

  const openToggle = {
    "1" : "bg-oyoya-yellow h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150",
    "2" : "bg-oyoya-yellow h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10",
    "3" : "bg-oyoya-yellow h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"
  }


  var styles = {
    main_container:
      "h-[180px] w-lvh flex flex-col justify-center bg-oyoya-purple",
    logo_title_container:
      "w-full h- [70%] flex flex-row items-center justify-between",
    logo: "w-[30%] flex flex-row items-center justify-center",
    scritta:
      "flex w-[70%] justify-center pr-[30px] pt-[15px] font-maru text-6xl font-extrabold text-oyoya-yellow",
    menu: "w-full h-[30%] px-[10px] flex flex-row items-center justify-around text-oyoya-yellow text-lg font-semibold",
    menu_item: "text-3xl py-[20px] text-left font-maru font-semibold text-oyoya-purple",
  };

  

  return (
    <div>
      {/* MAIN HEADER CONTAINER */}
      <div className="h-[200px] w-screen flex flex-col justify-around bg-oyoya-purple">
        {/* LOGO CONTAINER */}
        <div className="w-full h-[50%] flex flex-row items-center justify-center">
          <img
            className="h-[90%]"
            src="assets/oyoya_logo.jpg"
            alt="Logo di Oyoya - Progetto di Eventi di Musica Elettronica"
          />
        </div>
        {/* TITLE AND MENU TOGGLE CONTAINER */}
        <div className="w-full h-[30%] flex flex-row items-center justify-between px-4">
          <h1 className="font-maru font-extrabold text-oyoya-yellow text-6xl">
            OYOYA
          </h1>
          {/* TOGGLE MENU */}
          <button onClick={() => {menu ? setMenu(false) : setMenu(true)}} class="relative group">
            <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-oyoya-purple hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
              <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
                <div class={!menu ? closedToggle[1] : openToggle[1]}></div>
                <div class={!menu ? closedToggle[2] : openToggle[2]}></div>
                <div class={!menu ? closedToggle[3] : openToggle[3]}></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* MENU */}
      {/* TODO: h-calc... non funziona, capire come fare */}
      {menu ? 
      <div className="bg-red-300 h-[calc(100%-100px)] w-[50%] absolute top-[200px] right-0 flex flex-col px-[30px] shadow-2xl">
        <button className={styles.menu_item} onClick={(e) => {e.preventDefault(); setPage("home"); setMenu(false);console.log(page)}}>Home</button>
        <button className={styles.menu_item} onClick={(e) => {e.preventDefault(); setPage("events"); setMenu(false); console.log(page)}}>Events</button>
        <button className={styles.menu_item} onClick={(e) => {e.preventDefault(); setPage("radio"); setMenu(false);console.log(page)}}>Radio</button>
        <button className={styles.menu_item} onClick={(e) => {e.preventDefault(); setPage("wip"); setMenu(false);console.log(page)}}>Playlist</button>
        <button className={styles.menu_item} onClick={(e) => {e.preventDefault(); setPage("about"); setMenu(false);console.log(page)}}>About Us</button>
      </div> 
      : null
      }
    </div>
  );

  // return (
  //   <div className={styles.main_container}>
  //     {/* logo + title */}
  //     <div className={styles.logo_title_container}>
  //       {/* logo */}
  //       <div className={styles.logo} onClick={() => setPage("home")}>
  //         <img src="assets/oyoya_logo.jpg" alt="logo di oyoya" className="w-[100px] h-[100px]"/>
  //       </div>
  //       {/* scritta */}
  //       <div className={styles.scritta}>
  //         <h1>OYOYA</h1>
  //       </div>
  //     </div>
  //     {/* menu */}
  //     {/* <div className={styles.menu}>
  //       <button onClick={() => setPage("home")}>Home</button>
  //       <div className={styles.menu_item}/>
  //       <button onClick={() => setPage("events")}>Events</button>
  //       <div className={styles.menu_item}/>
  //       <button onClick={() => setPage("radio")}>Radio</button>
  //       <div className={styles.menu_item}/>
  //       <button onClick={() => setPage("wip")}>Playlist</button>
  //       <div className={styles.menu_item}/>
  //       <button onClick={() => setPage("about")}>About Us</button>
  //     </div> */}
  //   </div>
  // );
}
