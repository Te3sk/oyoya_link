import React from "react";
import img_oyoyaParty from "../assets/playlist_img/oyoya_party_img.jpg";
import img_endFossil from "../assets/playlist_img/end_fossil_img.jpg";
import db from "./dbLinks.json";

function Box({ title, link, img_path }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div
      className="relative border-2 rounded-lg border-red-400 h-20 w-11/12 m-3 flex flex-row items-center"
      onClick={handleClick}
    >
      <div className="w-16 h-16 ml-2 bg-lime-400">
        {img_path ? (
          <img
            src={img_path}
            alt="cover"
            className="w-16 h-16 rounded-lg object-fill"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="m-5 w-8/12 text-lg font-bold text-white text-left absolute right-0">
        {title}
      </div>
    </div>
  );
}

export default function EventView() {
  var events = db.Events;
  var playlists = db.Playlists;
  var radio = db.Radio;
  let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <main className="h-screen pt-32 pb-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Eventi</h1>
        {/* Aggiungi altro contenuto qui */}
        <div className="flex flex-col items-center">
          {Object.keys(events).map((e) => {
            const event = events[e];
            // skip the empty try title
            if (event.title === "title") return null;

            return (
              <a
                key={e}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-5/6 mx-auto my-8 p-4 bg-slate-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center">
                  {/* Immagine (problema immagini) */}
                  <img
                    src={require("./../assets/logo_white on black.png")}
                    alt={events[e].img}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  {/* Testo dell'evento */}
                  <div className="ml-4 text-white">
                    <h2 className="text-xl font-bold">
                      {e.replace("_", " ")}
                    </h2>
                    <p className="text-sm">{event.date}</p>
                    <p className="text-sm">{event.place}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
