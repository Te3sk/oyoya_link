import React from "react";
import db from "../dbLinks.json";
import style from "./styles.json";

export default function EventDescr({ event }) {
  console.log("event1: " + db.Events[event].img);
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

  console.log(db.Events[event].description);

  // todo - set new date (from yyyy-mm-dd to a decent view)
  // todo - set new hours (from hh:mm to a decent view)
  
  // line-up render function
  const line_up = () => {
    return (
      <div className="w-5/6 my-3">
        <ul style={{listStyleType : "upper-roman", paddingLeft : "20px"}}>
          {db.Events[event].lineup.split(",").map((name, index) => (
            <li key={index} className="text-xl">{name.trim()}</li> // Usa .trim() per rimuovere eventuali spazi
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={"container mx-auto px-4 flex flex-col items-center"}>
      {/* image */}
      <img
        src={require("./../assets/" + db.Events[event].img)}
        alt={"./../assets/" + event.img}
        className="w-2/3 h-2/3 border-4 border-white object-cover rounded-lg my-5"
      />
      {/* date and hours */}
      <h1 className="text-xl text-neutral-400">
        {db.Events[event].date} - {db.Events[event].hours}
      </h1>
      {/* luogo */}
      <div className="flex flex-row items-center my-3">
        <h1>{db.Events[event].place}</h1>
        <a
          href={db.Events[event].location_link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/?size=100&id=82787&format=png&color=FFFFFF"
            alt="event-link-icon"
          />
        </a>
      </div>
      {/* line-up */}
      <h1 className="w-full text-3xl font-bold ml-5">Line-up</h1>
      {line_up()}
      {/* description */}
      <h1 className="w-full text-3xl font-bold ml-5">Descrizione</h1>
      <p className="w-5/6 text-xl text-white mt-3 mb-8">
        {db.Events[event].description}
      </p>
      {/* prezzo */}
      {/* link */}
    </div>
  );
}
