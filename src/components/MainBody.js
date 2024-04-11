  import React from "react";
  import img_oyoyaParty from "../assets/playlist_img/oyoya_party_img.jpg"
  import img_endFossil from "../assets/playlist_img/end_fossil_img.jpg"

  function Box({ title, link, img_path }) {
    const handleClick = () => {
      window.open(link);
    };

    return (
      <div
        className="relative border-2 border-red-400 h-20 w-11/12 m-3 flex flex-row items-center"
        onClick={handleClick}
      >
        <div className="w-16 h-16 ml-2 bg-lime-400">
          {
            img_path ? 
            <img src={img_path} alt="cover" className="w-16 h-16 object-fill"/> :
            <></>
          }
        </div>
        <div className="m-5 w-8/12 text-lg font-bold text-white text-left absolute right-0">{title}</div>
      </div>
    );
  }

  export default function MainBody() {
    return (
      // <div className="bg-black">
        <div className="h-dvh  flex flex-col items-center border-2 overflow-scroll max-h-svh border-amber-500">
          <Box
            title="Oyoya Party"
            link="https://open.spotify.com/playlist/67BNVw2n4VVprcukhXIUMP?si=BpHKl-6MTwWYvt91ry5CpA&pi=e-aXqRoSPASrS8"
            img_path={img_oyoyaParty}
          />
          <Box
            title="Oyoya x Exploit: End Fossil"
            link="https://open.spotify.com/playlist/1t0X3GBOBCL3TV0vwn0gCo?si=257416284b6f4867"
            img_path={img_endFossil}
          />
        </div>
      // </div>
    );
  } 
