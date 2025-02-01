import React from "react";
// components
import Card from "./Card";
// database
import db from "./dbLinks.json";

export default function Radio() {

    const radios = Object.entries(db.Radios);



  return (
    <div className="min-h-lvh p-[10px] flex flex-col items-center">
      {/* youtube button */}
      <div className="m- [10px]">
        <button className="bg-red-600 text-white p-[10px] w-[200px] flex flex-row items-center justify-center rounded-lg" onClick={() => window.open("https://www.youtube.com/@oyoyamusic")}>
            <img src="https://img.icons8.com/?size=100&id=8vyhgBAYht7d&format=png&color=FFFFFF" alt="icona di youtube" className="w-[20px] mx-[5px]"/>
          Seguici su YouTube
        </button>
      </div>
      {/* radio cards */}

      {radios.map(([title, event], index) => {

        if (title === "templete") return null;

        var img = "../assets/" + event.img;

        return(
        <Card
          type = "radio"
          key={index}
          img_src={img}
          title={title} // 🔹 Usa la chiave come titolo
          description={event.description}
          date={event.data}
        />
      )})}
    </div>
  );
}
