import React from "react";
import db from "./dbLinks.json";
import style from "./styles.json";

export default function EventDescr({ event }) {
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

  const events = db.Events;

  console.log(event);
  console.log(typeof event);
  console.log(events[event]);
  console.log(typeof events[event]);

  return (
    <main className="h-full pt-32 pb-16 bg-black text-white">
      <h1 className="text-white bg-green w-full h-full">{event}</h1>
    </main>
  );
}
