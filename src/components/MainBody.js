  import React from "react";

  function Box({ title, link, img_path }) {
    const handleClick = () => {
      window.open(link);
    };

    return (
      <div
        className="border-2 border-red-400 h-20 w-11/12 m-3 flex flex-row items-center"
        onClick={handleClick}
      >
        <div className="w-16 h-16 ml-2 bg-lime-400">
          {
            img_path ? 
            <img src={require(img_path)} alt="cover"/> :
            <></>
          }
        </div>
        <div className="m-5 text-lg font-bold text-white">{title}</div>
      </div>
    );
  }

  export default function MainBody() {
    return (
      <div className="bg-black border-t     -2 border-white">
        <div className="h-dvh  flex flex-col items-center border-2 overflow-scroll max-h-svh border-amber-500">
          <Box
            title="Oyoya Party: Flipper & Friends"
            link="https://open.spotify.com/playlist/67BNVw2n4VVprcukhXIUMP?si=5b7244e161304460"
            // img_path="../assets/playlist_img/oyoya_party_img.jpg"
          />
          <Box
            title="Oyoya x Exploit: End Fossil"
            link="https://open.spotify.com/playlist/1t0X3GBOBCL3TV0vwn0gCo?si=257416284b6f4867"
            // img_path="../assets/playlist_img/end_fossil_img.jpg"
          />
        </div>
      </div>
    );
  } 
