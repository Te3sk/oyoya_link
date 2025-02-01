import React from 'react'
// import oyoya_logo from "./assets/oyoya_logo.jpg";

export default function Card({ type, img_src, title, description, date, place, hours, price, location, location_link, link }) {

  // TODO - non renderizza le immagini
  // image placeholder
  if (!img_src) img_src = "assets/oyoya_logo.jpg";
  else img_src = "assets/" + img_src;

  var card_type = type

  // title formatting
  while (title.indexOf("_") > 0) {
    title = title.replace("_", " ");
  }

  var subtitle = date, text;

  if (type === "radio") {
    // RADIO CARD
    text = description;
  } else if (type === "event") {
    text = place;
  } else {
    text = "";
  }

    return (
        <div className="bg-oyoya-purple/40 h-[325px] w-[250px] mt-[15px] rounded-lg shadow-lg flex flex-col items-center">
          {/* image */}
          <div className="bg-white w-[180px] h-[180px] mt-[15px] rounded-lg">
            <img
              src={(img_src)}
              alt="immagine di copertina della radio"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* writings container */}
          <div className="m-[10px] text-center">
            {/* TITLE */}
            <h1 className="font-maru text-xl font-semibold text-oyoya-purple">{title}</h1>
            {/* SUBTITLE */}
            <p className="text-[10px] my-[7px]">{subtitle}</p>
            {/* TEXT */}
            <p className='text-sm'>{text}</p>
          </div>
        </div>
      );
}
